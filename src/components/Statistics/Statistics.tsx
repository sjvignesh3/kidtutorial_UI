import React from 'react'
import * as S from '../SectionStyle/styles'
import Card from '../Card/Card'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
    scales: {
        y: {
            grid: {
                display: false
            },
          min: 0,
          max: 40, 
        },
        x:{
            grid: {
                display: false
            }
        }
      }
  };
  
  //const labels = ['Mon','Tue','','Thur','Fri','Sat','Sun'];
  const dataSet = [
    { label: 'Mon', value: 10, active: true },
    { label: 'Tue', value: 20, active: true },
    { label: 'Wed', value: 30, active: true },
    { label: 'Thur', value: 25, active: true },
    { label: 'Fri', value: 18, active: false },
    { label: 'Sat', value: 9, active: false },
    { label: 'Sun', value: 39, active: false },
  ];
  
export const data = {
    labels: dataSet.map(item => item.label),
    datasets: [
      {
        label: 'Minutes',
        data: dataSet.map(item => item.active? item.value: 40),
        backgroundColor: getActiveState(dataSet),
        borderRadius: 50,
        barPercentage: 0.4,
        categoryPercentage: 0.7,
        display: false,
      }
    ],
  };

const Statistics = () => {
  return (
    <>
        <S.SectionContainer>
            <S.SectionHeader>
                <S.H3>Statistics</S.H3>
                <S.H3>{"-->"}</S.H3>
            </S.SectionHeader>
            <S.SectionContent>
                <Bar options={options} data={data} />
            </S.SectionContent> 
        </S.SectionContainer>
    </>
  )
}

export default Statistics

function getActiveState(dataSet: { label: string; value: number; active: boolean; }[]): string[] {
    return dataSet.map(item => (item.active ? '#695bf6' : 'rgba(192, 192, 192, 0.6)'));
}
