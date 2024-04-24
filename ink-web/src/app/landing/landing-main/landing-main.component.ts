import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing-main',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './landing-main.component.html',
  styleUrl: './landing-main.component.css',
})
export class LandingMainComponent {}
