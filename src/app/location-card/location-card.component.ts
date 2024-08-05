import {Component, input} from '@angular/core';
import {WeatherLocation} from "../services/location.service";

@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.css'
})
export class LocationCardComponent {
  location = input.required<WeatherLocation>()

}
