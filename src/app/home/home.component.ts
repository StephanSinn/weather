import { Component } from '@angular/core';
import {CurrentComponent} from "../current/current.component";
import {LocationListComponent} from "../location-list/location-list.component";
import {ZipCodeFormComponent} from "../zip-code-form/zip-code-form.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        CurrentComponent,
        LocationListComponent,
        ZipCodeFormComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
