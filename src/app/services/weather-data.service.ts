import {inject, Injectable} from '@angular/core';
import {catchError, filter, of, switchMap} from "rxjs";
import {WeatherLocation} from "./location.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  httpClient = inject(HttpClient);

  getCurrentWeather(location: WeatherLocation) {
    return this.httpClient.get<CurrentWeather>(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=5a4b2d457ecbef9eb2a71e480b947604&units=metric`)
  }

  getForecastWeatherSevenDays(location: WeatherLocation) {
    return this.httpClient.get<ForecastWeather>(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${location.lat}&lon=${location.lon}&cnt=7&appid=5a4b2d457ecbef9eb2a71e480b947604&units=metric`)
  }

}

export interface CurrentWeather {
  weather: Weather[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  }
}

export interface ForecastWeather {
  list: { dt: number, temp: { day: number, min: number, max: number }, weather: Weather[] }[]
}

interface Weather {
  id: number;
  main: string,
  description: string,
  icon: string
}
