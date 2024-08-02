import {Component, signal} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule, NgModel} from "@angular/forms";

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


  model :ZipCode= {
    zipCode: null
  }


  submit(){
    console.log(this.model);
  }


}

interface ZipCode {
  zipCode: string|null;
}
