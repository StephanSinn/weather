import {Component, inject, signal} from '@angular/core';
import {LocationService, WeatherLocation} from "../services/location.service";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {LocationCardComponent} from "../location-card/location-card.component";

@Component({
  selector: 'app-current',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    LocationCardComponent,
    NgIf
  ],
  templateUrl: './current.component.html',
  styleUrl: './current.component.css'
})
export class CurrentComponent {
  locationService = inject(LocationService);
  alreadyInList = signal<boolean>(false);
  location$ = this.locationService.getLocationByZipCode$

  addLocation(location: WeatherLocation) {
    if (this.locationService.selectedLocations.some((element) => element.zip === location.zip)) {
      this.alreadyInList.set(true)
      return
    }
    this.locationService.selectedLocations.push(location);
    console.log(this.locationService.selectedLocations)
  }

}
