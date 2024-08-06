import {Component, DestroyRef, inject} from '@angular/core';
import {AsyncPipe, DatePipe, NgIf} from "@angular/common";
import {LocationService} from "../services/location.service";
import {WeatherDataService} from "../services/weather-data.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap, tap} from "rxjs";

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    DatePipe
  ],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent {
  destroy = inject(DestroyRef);
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)
  locationService = inject(LocationService);
  weatherDataService = inject(WeatherDataService)

  location$ = this.activatedRoute.paramMap.pipe(switchMap((paramMap) =>
    this.locationService.getLocation$(paramMap.get('zip')).pipe(takeUntilDestroyed(this.destroy))
  ))

  forecasts$ = this.location$.pipe(
    switchMap((location) => this.weatherDataService.getForecastWeatherSevenDays(location)),
    tap((value) => console.log(value.list.at(0)?.dt)),
    takeUntilDestroyed(this.destroy),
  )

  navigateHome() {
    this.router.navigate(['']);
  }


}
