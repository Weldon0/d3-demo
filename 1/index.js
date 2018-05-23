const str = 'china';
const dataset = ['dog', 'cat', 'rabbit', 'test']
const body = d3.select('body');
const p = body.selectAll('p');

p.data(dataset)
.text((d ,i) => {
    console.log(d, i)
    return d
})
p.remove();
body.insert('p')
    .text('插入的元素')
    .style({
        color: 'blue'
    })