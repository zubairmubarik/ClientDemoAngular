/* * * * * * * * * * * * * * * * * * * Story: Demo Client * * * * * * * * * * * * * * * 
* * * * * * * * * * * * * * * * * * * Author: Zubair Mubarik * * * * * * * * * * * * * 
* * * * * * * * * * * * * * * * * * * * Date :  15th Aug 2021 * * * * * * * * * * * * * 
* * * * * * * * * * * * * * * Description: Demo Project * * * * * * * * * * * * * * * * 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import { Component, OnInit, Input } from '@angular/core';
import { Temp } from '../../models/temp.model';
import { TemperatureService } from '../../services/temperature.service';
import { LoggingService } from 'src/app/services/logging.service';

//import { stringify } from 'querystring';
@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit { 

  constructor(private _temperatureService: TemperatureService, private _loggingService : LoggingService) { }
  public temp: Temp;
  @Input() 
  temperatureValue:number = 0;
  convertType : string = 'ConvertCelsiusToFahrenheit';  
  
  ngOnInit() {
    this.GetTemperature();
  }

  CalculateClick() {
    if (this.temperatureValue ===null)   {
      this._loggingService.logError("Temperature Value is empty");
      return 0;
    }
    this.GetTemperature();   
    this._loggingService.logMessage("Temperature is converted");
  }

  GetTemperature(){
      let that = this;
      that._temperatureService.getTemperature(this.temperatureValue,this.convertType)
        .subscribe(result => { that.temp = result as any;},        
        error => this._loggingService.logError("This is error " + error));    
  }
}
