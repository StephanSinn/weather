import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, filter, of, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  httpClient = inject(HttpClient);
  zipCode$ = new BehaviorSubject<number | null>(null);

  getLocationByZipCode$ = this.zipCode$.pipe(
    filter((zipCode): zipCode is number => zipCode != null),
    switchMap((zipCode) => this.httpClient.get(
        `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=5a4b2d457ecbef9eb2a71e480b947604`
      ).pipe(
        catchError(err => {
          console.log(err)
          return of(null)
        }))
    )
  )

}
