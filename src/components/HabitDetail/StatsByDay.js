import React from 'react';
import {Bar} from 'react-chartjs-2';
import styled from 'styled-components';


const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            },
            display: false
        }],
        xAxes: [{
            ticks: {
                fontColor: 'white',
                fontFamily: 'Oswald'
            },
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

const StatsByDay = ({stats}) => {
    const dataArr = [];
    for (let day in stats) {
        dataArr.push(stats[day]);
    }

const data = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [
    {
      backgroundColor: 'white',
      borderColor: 'white',
      barThickness: 1,
      borderWidth: 0,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: dataArr
    }
  ]
};
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