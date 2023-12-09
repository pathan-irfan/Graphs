import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart ,Tooltip,Legend,ArcElement,Title,} from 'chart.js';
Chart.register(Tooltip,Legend,ArcElement,Title)
const data = {
  labels: [
    'python',
    'java script',
    'react js',
    'html',
    'css',
    'node js '
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100,45,23,66,78],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(54, 362, 335)',
      'rgb(0, 0, 0)',
      'rgb(12, 300, 22, 36)',
    ],
    hoverOffset: 4
  }]
};
const Dounute = () => {
 

  return (
   <center> <div style={{height:"350px",marginLeft:"5%",marginTop:"4%"}}>
      <Doughnut data={data} />
    </div>
    </center>
  );
};

export default Dounute;
