import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

  onEnroll(id: number) {
    this.selectedCourseId = id;
    console.log(id);
  }
}