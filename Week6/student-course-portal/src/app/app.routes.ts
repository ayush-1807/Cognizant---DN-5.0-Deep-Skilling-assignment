import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';
import { CourseDetail } from './pages/course-detail/course-detail';
import { StudentProfile } from './pages/student-profile/student-profile';
import { ReactiveEnrollmentForm } from './pages/reactive-enrollment-form/reactive-enrollment-form';

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'courses',
    component: CourseList
  },

  {
    path: 'courses/:id',
    component: CourseDetail
  },

  {
    path: 'profile',
    component: StudentProfile,
    canActivate: [authGuard]
  },

  {
    path: 'enroll',
    component: ReactiveEnrollmentForm,
    canActivate: [authGuard]
  },

  {
  path: 'enroll',
  component: ReactiveEnrollmentForm,
  canActivate: [authGuard],
  canDeactivate: [unsavedChangesGuard]
},

  {
    path: '**',
    redirectTo: ''
  }
  

];