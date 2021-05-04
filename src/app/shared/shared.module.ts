import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { LineChartWithAnnotationsComponent } from './widgets/line-chart-with-annotations/line-chart-with-annotations.component';
import { SemiCircleDonutComponent } from './widgets/semi-circle-donut/semi-circle-donut.component';
import { SpeedometerComponent } from './widgets/speedometer/speedometer.component';
import { ClockComponent } from './widgets/clock/clock.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    LineChartWithAnnotationsComponent,
    SemiCircleDonutComponent,
    SpeedometerComponent,
    ClockComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    LineChartWithAnnotationsComponent,
    SemiCircleDonutComponent,
    SpeedometerComponent,
    ClockComponent
  ]
})
export class SharedModule { }
