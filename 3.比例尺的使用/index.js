var dataset_1 = [2.5, 2.1, 1.7, 1.3, 0.9];
var dataset_2 = [2500, 2100, 1700, 1300, 900];

const min = d3.min(dataset_1);
const max = d3.max(dataset_1);

const linear = d3.scale.linear() // 线性比例尺
               .domain([min, max])
               .range([0, 300])
console.log(linear(0.9));
console.log(linear(2.3));


var index = [0, 1, 2, 3, 4];
var color = ["red", "blue", "green", "yellow", "black"];
const ordinal = d3.scale.ordinal() // 序数比例尺
                .domain(index)
                .range(color)
console.log(ordinal(4))          
