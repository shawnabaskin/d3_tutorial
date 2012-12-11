var height = 500;
var width = 500;
var padding = 60;

var svg = d3.select("#main_container")
    .append("svg")
    .attr("width",width)
    .attr("height",height);

// var data = [1,2,3];
var data = [1,2,3,4,5,6,7];
var color = ["black","red","blue","yellow",
	     "green","grey","purple"];

var x_scale = d3.scale.linear()
    .domain(d3.extent(data, function(d)
		      {return d}))
    .range([padding,width - padding]);

var y_scale = d3.scale.linear()
    .domain(d3.extent(data, function(d){
	return d})
    .range([height-padding, padding]);

var x_axis = d3.svg.axis()
    .scale(x_scale)
    .orient("bottom")
    .ticks(8);

var y_axis = d3.svg.axis()
    .scale(y_scale)
    .orient("left")
    .ticks(8);

// Added the y-axis to the dom
svg.append("g")
    .attr("transform","translate(" 
	  + padding + ",0)")
    .attr("class","y_axis")
    .call(y_axis);

// Added the x-axis to the dom
svg.append("g")
    .attr("transform","translate(0," 
	  + (height - padding) + ")")
    .attr("class","x_axis")
    .call(x_axis);



var circles = svg.selectAll("circle")
    .data(data2)
    .enter().append("circle")
    .attr("cx",function(d,i){
	console.log(d,i);
	return x_scale(d)})
    .attr("cy",function(d){
	return y_scale(d)})
    .attr("fill",function (d,i){
	return color[i];})
    .attr("r", function(d) {
	return x_scale(d)/10});

