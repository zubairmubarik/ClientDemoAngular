
import { TestBed } from '@angular/core/testing';
import { TemperatureService } from '../services/temperature.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Temp } from '../models/temp.model';
import { environment } from 'src/environments/environment';

describe('TemperatureService', () => {

  let temperatureService : TemperatureService;
  let httpTestingController:HttpTestingController;
  let httpClient : HttpClient;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[TemperatureService]
    });

    temperatureService =TestBed.get(TemperatureService);
    httpTestingController =TestBed.get(HttpTestingController);

  });
it('should test httpClient.get',()=>{
//ConvertCelsiusToFahrenheit
  const temp: Temp =  {value:32, unit:'F'};
  let temperatureValue = 0;
  let convertType ='ConvertCelsiusToFahrenheit';
  let baseURL = environment.baseURL;

  temperatureService.getTemperature(0,'ConvertCelsiusToFahrenheit').subscribe((get)=>
  {
    expect(temp).toBe(get,'should check moked data');
  })

  const req = httpTestingController.expectOne(`${baseURL}api/Temperature/${temperatureValue}/${convertType}`);
  expect(req.request.responseType).toEqual('json');
  req.flush(temp);

});

});