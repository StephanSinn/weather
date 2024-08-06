import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  filter,
  map,
  Observable,
  of,
  Subject,
  switchMap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  httpClient = inject(HttpClient);
  zipCode$ = new Subject<number | null>();
  selectedLocations = new Map<string, WeatherLocation>();

  getLocationByZipCode$ = this.zipCode$.pipe(
    filter((zipCode): zipCode is number => zipCode != null),
    map((zipCode) => zipCode.toString()),
    switchMap((zipCode) => this.getLocation$(zipCode)),
  );

  getLocation$(zipCode: string | null): Observable<WeatherLocation> {
    return this.httpClient
      .get<WeatherLocation>(
        `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=5a4b2d457ecbef9eb2a71e480b947604`,
      )
      .pipe(
        catchError((err) => {
          return of(err);
        }),
      );
  }

  storeLocationListLocally() {
    localStorage.setItem(
      'locationList',
      JSON.stringify(Array.from(this.selectedLocations.entries())),
    );
  }

  restoreLocationListLocally() {
    this.selectedLocations = new Map(
      JSON.parse(localStorage.getItem('locationList') ?? ''),
    );
  }
}

export interface WeatherLocation {
  zip: string;
  name: string;
  lat: string;
  lon: string;
  country: string;
  error?: Object;
}
