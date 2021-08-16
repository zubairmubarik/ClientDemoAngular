import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logMessage(message:string)
  {
    let currentDateTime = new Date();
    let currentDateTimeString = currentDateTime.toDateString();
    console.log(currentDateTimeString +":", message);
  }

  logError(message:string)
  {
    let currentDateTime = new Date();
    let currentDateTimeString = currentDateTime.toDateString();
    console.error(currentDateTimeString +":", message);
  }

}
