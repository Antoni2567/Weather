import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { DatepipePipe } from './pipes/datepipe.pipe';
import { HistoricalComponent } from './components/historical/historical.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForecastComponent,
    DatepipePipe,
    HistoricalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ForecastComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
