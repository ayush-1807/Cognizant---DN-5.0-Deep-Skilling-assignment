import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnInit, OnChanges, OnDestroy {

  @Input() course: any;

  @Output() enrollRequested = new EventEmitter<number>();

  ngOnInit() {
    console.log('CourseCard initialized');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Course changed:', changes);
  }

  ngOnDestroy() {
    console.log('CourseCard destroyed');
  }

  enroll() {
    this.enrollRequested.emit(this.course.id);
  }

}