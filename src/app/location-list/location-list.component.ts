import {Component, inject, OnInit} from '@angular/core';
import {LocationService, WeatherLocation} from "../services/location.service";
import {LocationCardComponent} from "../location-card/location-card.component";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-location-list',
  standalone: true,
  imports: [
    LocationCardComponent,
    NgIf,
    RouterLink
  ],
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.css'
})
export class LocationListComponent implements OnInit{
  locationService = inject(LocationService);

  ngOnInit() {
    this.restoreLocationList()
  }

  removeLocation(location:WeatherLocation) {
    this.locationService.selectedLocations.delete(location.zip)
  }


  storeLocationList(){
    this.locationService.storeLocationListLocally()
  }

  restoreLocationList(){
    this.locationService.restoreLocationListLocally()
  }

}
