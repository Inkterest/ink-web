import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-landing-main',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './landing-main.component.html',
  styleUrl: './landing-main.component.css',
})
export class LandingMainComponent {}
