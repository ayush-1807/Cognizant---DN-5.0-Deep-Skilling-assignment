import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentService } from '../../services/enrollment';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile implements OnInit {

  enrolledCourses: Course[] = [];

  constructor(
    private enrollmentService: EnrollmentService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {

    const ids = this.enrollmentService.getEnrolledCourses();

    ids.forEach(id => {

      this.courseService.getCourseById(id).subscribe({

        next: (course) => {
          this.enrolledCourses.push(course);
        },

        error: (err) => {
          console.log(err);
        }

      });

    });

  }

}