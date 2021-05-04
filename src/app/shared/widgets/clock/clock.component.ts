import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import more from 'highcharts/highcharts-more';
// import { pad } from 'highcharts';
more(Highcharts);

// declare var require: any;
// require('highcharts/highcharts-more')(Highcharts);
// require('highcharts/modules/solid-gauge')(Highcharts);
// require('highcharts/modules/heatmap')(Highcharts);
// require('highcharts/modules/treemap')(Highcharts);
// require('highcharts/modules/funnel')(Highcharts);
// let chartHolder;

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data = [];

  constructor() { }

  ngOnInit() {
    let now = this.getNow();

    this.chartOptions = {
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '80%'
      },
    
      credits: {
        enabled: false
      },
    
      title: {
        text: 'The Highcharts clock'
      },
    
      pane: {
        background: [{
          // default background
        }, {
          // reflex for supported browsers
          backgroundColor: Highcharts.SVGElement ? {
            radialGradient: {
              cx: 0.5,
              cy: -0.4,
              r: 1.9
            },
            stops: [
              [0.5, 'rgba(255, 255, 255, 0.2)'],
              [0.5, 'rgba(200, 200, 200, 0.2)']
            ]
          } : null
        }]
      },
    
      yAxis: {
        labels: {
          distance: -20
        },
        min: 0,
        max: 12,
        lineWidth: 0,
        showFirstLabel: false,
    
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 5,
        minorTickPosition: 'inside',
        minorGridLineWidth: 0,
        minorTickColor: '#666',
    
        tickInterval: 1,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        title: {
          text: 'Powered by<br/>Highcharts',
          style: {
            color: '#BBB',
            fontWeight: 'normal',
            fontSize: '8px',
            lineHeight: '10px'
          },
          y: 10
        }
      },
    
      tooltip: {
        formatter: function () {
          return this.series.chart.tooltipText;
        }
      },
    
      series: [{
        data: [{
          id: 'hour',
          y: now.hours,
          dial: {
            radius: '60%',
            baseWidth: 4,
            baseLength: '95%',
            rearLength: 0
          }
        }, {
          id: 'minute',
          y: now.minutes,
          dial: {
            baseLength: '95%',
            rearLength: 0
          }
        }, {
          id: 'second',
          y: now.seconds,
          dial: {
            radius: '100%',
            baseWidth: 1,
            rearLength: '20%'
          }
        }],
        animation: false,
        dataLabels: {
          enabled: false
        }
      }]
    };

      // Move
    // setInterval(() => {

    //   debugger
    //   const now = this.getNow();
  
    //   if (this.chartOptions.chart.axes) { // not destroyed
    //     var hour = this.chartOptions.chart.get('hour'),
    //       minute = this.chartOptions.chart.get('minute'),
    //       second = this.chartOptions.chart.get('second'),
    //       // run animation unless we're wrapping around from 59 to 0
    //       animation = now.seconds === 0 ?
    //         false : {
    //           easing: this.easeOutBounce()
    //         };
  
    //     // Cache the tooltip text
    //     this.chartOptions.chart.tooltipText =
    //         this.pad(Math.floor(now.hours), 2) + ':' +
    //         this.pad(Math.floor(now.minutes * 5), 2) + ':' +
    //         this.pad(now.seconds * 5, 2);
  
  
    //     hour.update(now.hours, true, animation);
    //     minute.update(now.minutes, true, animation);
    //     second.update(now.seconds, true, animation);
    //   }
  
    // }, 1000);



    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  // easeOutBounce(x: number): number {
  //   const n1 = 7.5625;
  //   const d1 = 2.75;
    
  //   if (x < 1 / d1) {
  //       return n1 * x * x;
  //   } else if (x < 2 / d1) {
  //       return n1 * (x -= 1.5 / d1) * x + 0.75;
  //   } else if (x < 2.5 / d1) {
  //       return n1 * (x -= 2.25 / d1) * x + 0.9375;
  //   } else {
  //       return n1 * (x -= 2.625 / d1) * x + 0.984375;
  //   }
  // }

  /**
 * Get the current time
 */
  getNow() {
    const now = new Date();

    return {
      hours: now.getHours() + now.getMinutes() / 60,
      minutes: now.getMinutes() * 12 / 60 + now.getSeconds() * 12 / 3600,
      seconds: now.getSeconds() * 12 / 60
    };
  }

  /**
 * Pad numbers
 */
  pad(number, length) {
    // Create an array of the remaining length + 1 and join it with 0's
    return new Array((length || 2) + 1 - String(number).length).join('0') + number;
  }

      /**
 * Easing function from https://github.com/danro/easing-js/blob/master/easing.js
 */
easeOutBounce = function (pos) {
  if ((pos) < (1 / 2.75)) {
    return (7.5625 * pos * pos);
  }
  if (pos < (2 / 2.75)) {
    return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
  }
  if (pos < (2.5 / 2.75)) {
    return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
  }
  return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
};

}
