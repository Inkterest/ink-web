import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingMainComponent } from './landing/landing-main/landing-main.component';
import { LoginComponent } from './login/login/login.component';
import { HeaderComponent } from './header/header.component';
import { ArtistViewComponent } from './view/artist-view/artist-view.component';

export const routes: Routes = [
  { path: '', component: LandingMainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'artist-view', component: ArtistViewComponent },
  { path: '**', component: PageNotFoundComponent },
];
