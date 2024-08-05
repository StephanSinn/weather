import {Component, inject} from '@angular/core';
import {LocationService, WeatherLocation} from "../services/location.service";
import {LocationCardComponent} from "../location-card/location-card.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-location-list',
  standalone: true,
  imports: [
    LocationCardComponent,
    NgIf
  ],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.css'
})
export class LocationListComponent {
  locationService = inject(LocationService);

  removeLocation(location:WeatherLocation) {
    this.locationService.selectedLocations.delete(location.zip)
  }

}
