import React from 'react';
import {Bar} from 'react-chartjs-2';
import styled from 'styled-components';

const data = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [
    {
      backgroundColor: 'black',
      borderColor: 'white',
      borderCapStyle: 'round',
      barThickness: 0,
      borderWidth: 4,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40, 12]
    }
  ]
};

const options = {
    scales: {
        yAxes: [{
            display: false
        }],
        xAxes: [{
            // display: false,
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

const StatsByDay = () => {
    return (
        <div>
        <Bar
          data={data}
          width={180}
          height={150}
          options={options}
        />
      </div>
    );
};

export default StatsByDay;