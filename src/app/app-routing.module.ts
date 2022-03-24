import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HistoricalComponent } from './components/historical/historical.component';

const routes: Routes = [
  {path:'today', component: TodayComponent},
  {path:'alerts', component: AlertsComponent},
  {path: 'forecast', component: ForecastComponent},
  {path: 'historical', component: HistoricalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
