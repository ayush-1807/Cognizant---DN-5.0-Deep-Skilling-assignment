import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ReactiveEnrollmentForm } from './pages/reactive-enrollment-form/reactive-enrollment-form';

export const routes: Routes = [
  { path: 'enroll', component: Home },
  { path: 'enroll-reactive', component: ReactiveEnrollmentForm },
  { path: '', redirectTo: 'enroll', pathMatch: 'full' }
];