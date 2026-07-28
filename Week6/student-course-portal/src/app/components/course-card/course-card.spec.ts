/// <reference types="jasmine" />
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseCard } from './course-card';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';

describe('CourseCard', () => {

  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  const mockEnrollmentService = {
    enroll: jasmine.createSpy('enroll'),
    unenroll: jasmine.createSpy('unenroll'),
    isEnrolled: jasmine.createSpy('isEnrolled').and.returnValue(false)
  };

  const mockCourse: Course = {
    id: 1,
    name: 'Angular',
    code: 'ANG101',
    credits: 4,
    gradeStatus: 'passed'
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [
        {
          provide: EnrollmentService,
          useValue: mockEnrollmentService
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course name', () => {
    const element = fixture.debugElement.query(By.css('h3'));
    expect(element.nativeElement.textContent).toContain('Angular');
  });

});