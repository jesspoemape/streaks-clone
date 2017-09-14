import React from 'react';
import {Line} from 'react-chartjs-2';
import styled from 'styled-components';


const options = {
    scales: {
        yAxes: [{
            display: false
        }],
        xAxes: [{
            ticks: {
                fontColor: 'white'
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

const StatsByTime = ({startDate, totalDays, stats}) => {
    const dataArr = [];
    let i = 0;
    for (let stat in stats) {
        if (stats[i]) {
            dataArr.push(stats[stat]);
            i++;
        }
        dataArr.push(0);
        i++;
    }

const data = {
  labels: ["","","","","","","","","","","","","","","","","","","","","","","",""],
  datasets: [
    {
      fill: 'origin',
      lineTension: 0.3,
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
      pointRadius: 0,
      pointHitRadius: 10,
      data: dataArr
    }
  ]
};

    return (
        <Container>
            <Line data={data} options={options} width={160} height={100}/>
            <LabelsContainer>
                <Label>6AM</Label>
                <Label>6PM</Label>
            </LabelsContainer>
      </Container>
    );
};

export default StatsByTime;

const Container = styled.div`
    
`
const LabelsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;
    bottom: 14px;
`
const Label = styled.h5`
    text-transform: uppercase;
    font-size: .7rem;
    letter-spacing: 1px;
    color: white;
`