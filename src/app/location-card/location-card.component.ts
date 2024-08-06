import {Component, inject, input} from '@angular/core';
import {WeatherLocation} from "../services/location.service";
import {WeatherDataService} from "../services/weather-data.service";
import {AsyncPipe, JsonPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {toObservable} from "@angular/core/rxjs-interop";
import {switchMap} from "rxjs";
import {IconLoaderDirective} from "../directives/icon-loader.directive";

@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    NgIf,
    NgOptimizedImage,
    IconLoaderDirective
  ],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.css'
})
export class LocationCardComponent {
  location = input.required<WeatherLocation>()
  weatherDataService = inject(WeatherDataService)

  currentWeather$ = toObservable(this.location).pipe(
    switchMap((location) => this.weatherDataService.getCurrentWeather(location)
    )
  )
}
