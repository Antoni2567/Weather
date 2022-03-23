import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { AlertsComponent } from './alerts/alerts.component';
const routes: Routes = [
  {path:'today', component: TodayComponent},
  {path:'alerts', component: AlertsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
