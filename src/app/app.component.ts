import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from "@angular/common";
import {ZipCodeFormComponent} from "./zip-code-form/zip-code-form.component";
import {CurrentComponent} from "./current/current.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, ZipCodeFormComponent, CurrentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather';
}
