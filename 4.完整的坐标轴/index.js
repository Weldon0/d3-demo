const width = 400;
const height = 400;
const dataset = [10, 20, 30, 40, 33, 24, 12, 5, 1000];
const padding = {
	left: 30,
	right: 30,
	top: 30,
	bottom: 30
}

var xScale = d3.scale.ordinal()
    .domain(d3.range(dataset.length))
    .rangeRoundBands([0, width - padding.left - padding.right]);

//y轴的比例尺
var yScale = d3.scale.linear()
    .domain([0,d3.max(dataset)])
    .range([height - padding.top - padding.bottom, 0]);


const xAxis = d3.svg.axis()
							.scale(xScale)								
							.orient('bottom')

const yAxis = d3.svg.axis()
							.scale(yScale)							
							.orient('left')
							
const svg = d3.select('body')
	.append('svg')
	.attr({
		width,
		height
  })
  
  var rectPadding = 4;

  //添加矩形元素
  var rects = svg.selectAll(".MyRect")
          .data(dataset)
          .enter()
          .append("rect")
          .attr("class","MyRect")
          .attr("transform","translate(" + padding.left + "," + padding.top + ")")
          .attr("x", function(d,i){
              return xScale(i) + rectPadding/2;
          } )
          .attr("y",function(d){
              return yScale(d);
          })
          .attr("width", xScale.rangeBand() - rectPadding )
          .attr("height", function(d){
              return height - padding.top - padding.bottom - yScale(d);
          });
  
  //添加文字元素
  var texts = svg.selectAll(".MyText")
          .data(dataset)
          .enter()
          .append("text")
          .attr("class","MyText")
          .attr("transform","translate(" + padding.left + "," + padding.top + ")")
          .attr("x", function(d,i){
              return xScale(i) + rectPadding/2;
          } )
          .attr("y",function(d){
              return yScale(d);
          })
          .attr("dx",function(){
              return (xScale.rangeBand() - rectPadding)/2;
          })
          .attr("dy",function(d){
              return 20;
          })
          .text(function(d){
              return d;
          });

//添加x轴
svg.append("g")
  .attr("class","axis")
  .attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
  .call(xAxis); 

//添加y轴
svg.append("g")
  .attr("class","axis")
  .attr("transform","translate(" + padding.left + "," + padding.top + ")")
  .call(yAxis);          
