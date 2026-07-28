import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses: Course[] = [];
  selectedCourseId = 0;

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe({

      next: (courses) => {
        this.courses = courses;
      },

      error: (err) => {
        console.log(err);
      }

    });

  }

  onEnroll(id: number): void {

    this.selectedCourseId = id;

    this.router.navigate(['/courses', id]);

  }

}