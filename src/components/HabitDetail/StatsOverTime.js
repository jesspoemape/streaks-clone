import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', "Sep", 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
  datasets: [
    {
      fill: 'origin',
      lineTension: .5,
      backgroundColor: 'rgb(239, 140, 115)',
      borderColor: 'white',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'white',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2.5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [100, 59, 80, 81, 56, 55, 40, 45, 23, 67, 23, 54, 12, 43, 23]
    }
  ]
};

const options = {
    scales: {
        yAxes: [{
            display: false
        }],
        xAxes: [{
            display: false,
            gridLines: {
                display: false
            }
        }]
    },
    legend: {
        display: false
    },
    maintainAspectRatio: false
};

const StatsOverTime = () => {
    return (
        <div>
            <Line data={data} options={options} width={375} height={75}/>
      </div>
    );
};

export default StatsOverTime;