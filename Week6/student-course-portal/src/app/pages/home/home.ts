import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnrollmentForm } from '../enrollment-form/enrollment-form';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    EnrollmentForm
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