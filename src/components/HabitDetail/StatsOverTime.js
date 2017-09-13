import React from 'react';
import {Line} from 'react-chartjs-2';
import styled from 'styled-components';

const data = {
  labels: ["","","","","","","","","","","","","","",""],
  datasets: [
    {
      fill: 'origin',
      lineTension: .5,
      backgroundColor: 'rgb(255, 132, 99)',
      borderColor: 'white',
      borderWidth: '4',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'white',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 2,
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

const StatsOverTime = ({startDate, totalDays}) => {
    return (
        <Container>
            <Line data={data} options={options} width={375} height={75}/>
            <LabelsContainer>
                <Label>{startDate ? startDate : 'Start Date'}</Label>
                <Label>{totalDays ? `${totalDays} Days` : '0 Days'}</Label>
                <Label>Today</Label>
            </LabelsContainer>
      </Container>
    );
};

export default StatsOverTime;

const Container = styled.div`
    border-top: 2px solid #ff987c;
    border-bottom: 2px solid #ff987c;
    padding: 10px;
    margin-bottom: 5px;
`
const LabelsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Label = styled.h5`
    text-transform: uppercase;
    font-size: .7rem;
    padding-top: 5px;
    letter-spacing: 1px;
    color: white;
`