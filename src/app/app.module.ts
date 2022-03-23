import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { DatepipePipe } from './pipes/datepipe.pipe';
import { HistoricalComponent } from './components/historical/historical.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SubmitzipComponent } from './components/submitzip/submitzip.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    DatepipePipe,
    HistoricalComponent,
    NavbarComponent,
    SubmitzipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SubmitzipComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
