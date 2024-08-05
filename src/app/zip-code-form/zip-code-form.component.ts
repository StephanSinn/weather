import {Component, inject, signal} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule, NgModel} from "@angular/forms";
import {LocationService} from "../services/location.service";

@Component({
  selector: 'app-zip-code-form',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './zip-code-form.component.html',
  styleUrl: './zip-code-form.component.css'
})
export class ZipCodeFormComponent {
  showText = signal<boolean>(false);
  locationService = inject(LocationService);
  zipCode$ = this.locationService.zipCode$


  model :ZipCode= {
    zipCode: null
  }


  submit(){
    console.log(this.model);
    this.zipCode$.next(this.model.zipCode)
  }


}

interface ZipCode {
  zipCode: number|null;
}
