import React from 'react';
import { BarChart, LineChart } from 'react-d3-components';
/*
https://www.npmjs.com/package/react-d3-components

*/
// const barData = [{
//     label: 'somethingA',
//     values: [
//       {
//         x: '5am',
//         y: 10,
//       },
//       {
//         x: '10am',
//         y: 4,
//       },
//       {
//         x: '12pm',
//         y: 3,
//       },
//     ],
// }];
// var BarChart = ReactD3.BarChart;
 
var data = [
    {
    label: 'aapl',
    values: [{x: 'SomethingA', y: 11}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
    },
    {
    label: 'baba',
    values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
    }
];
class Tryd3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = 0;
    }
    render(){
        return (
            <BarChart
                groupedBars
                data={data}
                width={600}
                height={400}
                margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
        );
    }
}
export default Tryd3;