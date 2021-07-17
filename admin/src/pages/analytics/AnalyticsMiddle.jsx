import "./analytics.css";
import Chart from "react-apexcharts";
import React from "react";


var _seed = 42;
Math.random = function() {
  _seed = _seed * 16807 % 2147483647;
  return (_seed - 1) / 2147483646;
};

/*
// this function will generate output in this format
// data = [
  [timestamp, 23],
  [timestamp, 33],
  [timestamp, 12]
  ...
]
*/
function generateDayWiseTimeSeries(baseval, count, yrange) {
var i = 0;
var series = [];
while (i < count) {
var x = baseval;
var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

series.push([x, y]);
baseval += 86400000;
i++;
}
return series;
}

var data = generateDayWiseTimeSeries(new Date('11 Feb 2021').getTime(), 185, {
min: 30,
max: 90
})

 export default class AnalyticsMiddle extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            data: data
          }],
          options: {
            title:{
              text:'Slot Bookings Analysis',
              align:'center',
            },
            chart: {
              id: 'chart2',
              type: 'line',
              height: 230,
              toolbar: {
                autoSelected: 'pan',
                show: false
              }
            },
            colors: ['#546E7A'],
            stroke: {
              width: 3
            },
            dataLabels: {
              enabled: false
            },
            fill: {
              opacity: 1,
            },
            markers: {
              size: 0
            },
            xaxis: {
              type: 'datetime'
            }
          },
        
          seriesLine: [{
            data: data
          }],
          optionsLine: {
            chart: {
              id: 'chart1',
              height: 130,
              type: 'area',
              brush:{
                target: 'chart2',
                enabled: true
              },
              selection: {
                enabled: true,
                xaxis: {
                  min: new Date('19 Jun 2021').getTime(),
                  max: new Date('14 Aug 2021').getTime()
                }
              },
            },
            colors: ['#008FFB'],
            fill: {
              type: 'gradient',
              gradient: {
                opacityFrom: 0.91,
                opacityTo: 0.1,
              }
            },
            xaxis: {
              type: 'datetime',
              tooltip: {
                enabled: false
              }
            },
            yaxis: {
              tickAmount: 2
            }
          },
        
        
        };
      }
      render() {
        return (
            <div className="analytics">
            <div className="featuredItemAnalytics">
              <div className="featuredMoneyContainer">
            <div id="wrapper">
              <div id="chart-line2">
              <Chart options={this.state.options} series={this.state.series} type="line" height={330} width={650}/>
            </div>
              <div id="chart-line">
              <Chart options={this.state.optionsLine} series={this.state.seriesLine} type="area" height={130} width={650}/>
            </div>
            </div>
          </div>
          </div>
          </div>
        );
      }
    }