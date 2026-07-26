import { Routes } from '@angular/router';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';

export const routes: Routes = [
  {
    path: 'enroll',
    component: EnrollmentForm
  },
  {
    path: '',
    redirectTo: 'enroll',
    pathMatch: 'full'
  }
];