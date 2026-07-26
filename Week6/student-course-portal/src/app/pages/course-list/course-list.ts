import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  selectedCourseId = 0;

  courses = [
    { id: 1, name: 'Angular', code: 'ANG101', credits: 4 },
    { id: 2, name: 'React', code: 'REA101', credits: 3 },
    { id: 3, name: 'Java', code: 'JAVA101', credits: 4 }
  ];

  onEnroll(id: number) {
    console.log('Enrolling in course:', id);
    this.selectedCourseId = id;
  }

}