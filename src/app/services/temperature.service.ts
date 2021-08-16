import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams,HttpHeaders } from '@angular/common/http';
import { Temp } from '../models/temp.model';
import { Observable } from 'rxjs/';


@Injectable({
  providedIn: 'root'
})
export class TemperatureService {  

  constructor(private http: HttpClient) { }

  getTemperature(temperatureValue ,convertType) :Observable<Temp> {        
    let headers = new HttpHeaders();
    headers  = headers.append('responseType', 'json');
    return this.http.get<Temp>(`https://localhost:5001/api/Temperature/${temperatureValue}/${convertType}`, {headers: headers});
  } 
}