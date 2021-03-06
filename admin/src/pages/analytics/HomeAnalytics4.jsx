import "./HomeAnalytics.css";
import Chart from "react-apexcharts";
import React from "react";
      
 
    
      var _seed = 42;
      Math.random = function() {
        _seed = _seed * 16807 % 2147483647;
        return (_seed - 1) / 2147483646;
      };


export default class HomeAnalytics4 extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [76, 67, 61, 90],
            options: {
              title:{
                text:'Vehicle Type Analysis',
                align:'center'

              },
              chart: {
                height: 390,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  offsetY: 0,
                  startAngle: 0,
                  endAngle: 270,
                  hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                  },
                  dataLabels: {
                    name: {
                      show: false,
                    },
                    value: {
                      show: false,
                    }
                  }
                }
              },
              colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
              labels: ['2wheelers', 'suv', 'seadan', 'hatchback'],
              legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'left',
                offsetX: 160,
                offsetY: 15,
                labels: {
                  useSeriesColors: true,
                },
                markers: {
                  size: 0
                },
                formatter: function(seriesName, opts) {
                  return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
                itemMargin: {
                  vertical: 3
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                      show: false
                  }
                }
              }]
            },        
          };
        }

      

        render() {
          return (
              <div id="chart2">
                <Chart options={this.state.options} series={this.state.series} type="radialBar" height={390} width={650} />
              </div>
             
          );
        }
      }

    
