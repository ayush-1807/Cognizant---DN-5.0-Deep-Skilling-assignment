import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnrollmentForm } from '../enrollment-form/enrollment-form';
import { CourseList } from '../course-list/course-list';
import { StudentProfile } from '../student-profile/student-profile';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    EnrollmentForm,
    CourseList,
    StudentProfile
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

}