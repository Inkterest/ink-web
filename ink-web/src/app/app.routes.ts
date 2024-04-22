import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingMainComponent } from './landing/landing-main/landing-main.component';

export const routes: Routes = [
  { path: '', component: LandingMainComponent },
  { path: '**', component: PageNotFoundComponent },
];
