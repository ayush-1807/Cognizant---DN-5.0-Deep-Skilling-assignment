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
    this.enrolledCourses =
      this.enrollmentService
        .getEnrolledCourses()
        .map(id => this.courseService.getCourseById(id))
        .filter((course): course is Course => course !== undefined);
  }

}