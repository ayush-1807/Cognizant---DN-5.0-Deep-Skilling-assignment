import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnInit, OnChanges, OnDestroy {

  @Input() course: any;

  @Output() enrollRequested = new EventEmitter<number>();

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}

  ngOnDestroy() {}

  enroll() {
    this.enrollmentService.enroll(this.course.id);
    this.enrollRequested.emit(this.course.id);
  }

  unenroll() {
    this.enrollmentService.unenroll(this.course.id);
  }

  isEnrolled() {
    return this.enrollmentService.isEnrolled(this.course.id);
  }
}