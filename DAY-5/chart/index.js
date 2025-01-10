constX=['Python','Java','C++','JavaScript'];
constY=[89,90,78,99];
const barColor=['red','blue','green','orange'];



const layout= {title:'Programming Language Marks'};     //for plotly.js    https://cdn.plot.ly/plotly-latest.min.js
const data=[{labels:constX,values:constY,type:'pie',marker:{colors:barColor}}];   //labels & values for pie and x & y for bar
Plotly.newPlot('chart',data,layout);



// new Chart('chart',{    //for chart.js      https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js
//     type:'bar',
//     data: {
//         labels: constX,
//         datasets:[{
//             backgroundColor: barColor,
//             data: constY
//         }]
//     },
//     options:{
//         legend:{display: false},
//         title:{
//             display:true,
//             text:'Programming Language Marks'
//         }

//     }
// });

