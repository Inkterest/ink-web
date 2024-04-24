import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from '../../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  login() {
    // Here you would implement your login logic
    console.log(
      `Logging in with username: ${this.username} and password: ${this.password}`
    );
    // You can redirect the user to another page or handle the login logic as needed
  }
}
