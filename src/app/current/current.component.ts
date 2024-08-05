import {Component, inject} from '@angular/core';
import {LocationService} from "../services/location.service";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-current',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './current.component.html',
  styleUrl: './current.component.css'
})
export class CurrentComponent {
  locationService = inject(LocationService);

  location$ = this.locationService.getLocationByZipCode$

}
