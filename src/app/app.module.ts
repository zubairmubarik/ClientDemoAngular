import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import {TemperatureService} from './services/temperature.service';

import { HttpClientModule } from '@angular/common/http'; 
import { LoggingService } from './services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TemperatureService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
