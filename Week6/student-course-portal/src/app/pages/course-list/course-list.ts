import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';

import * as CourseActions from '../../store/course/course.actions';
import * as CourseSelectors from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses$!: Observable<Course[]>;

  constructor(
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.courses$ = this.store.select(
      CourseSelectors.selectAllCourses
    );

    this.store.dispatch(
      CourseActions.loadCourses()
    );

  }

  onEnroll(id: number): void {

    this.router.navigate(['/courses', id]);

  }

}