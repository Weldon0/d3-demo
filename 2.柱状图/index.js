const height = 300;
const width = 2000;
const dataset = [ 250 , 210 , 170 , 130 , 90 ];  //数据（表示矩形的宽度）;
const rectHeight = 40;

const linear = d3.scale.linear()
							 .domain([0, d3.max(dataset)])
							 .range([0, 500])
const axis = d3.svg.axis()
						 .scale(linear)
						 .orient('bottom')							 
						 .ticks(10)
const svg = d3.select('body')
	.append('svg')
	.attr({
		width,
		height
	})

svg.selectAll('rect')
	 .data(dataset)
	 .enter()
	 .append('rect')
	 .attr({
		 x: 20,
		 y: (d, i) => i * rectHeight,
		 width: d => linear(d),
		 height: rectHeight - 2,
		//  fill: '#FF7100'
	 })

svg.append('g')
	 .attr({
		 class: 'axis',
		 transform: `translate(20, ${dataset.length * rectHeight + 10})`
	 })
	 .call(axis)