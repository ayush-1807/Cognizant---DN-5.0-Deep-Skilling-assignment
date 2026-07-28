import { ElementRef } from '@angular/core';
import { Highlight } from './highlight';

describe('Highlight', () => {
  it('should create', () => {
    const el = {} as ElementRef;
    const directive = new Highlight(el);
    expect(directive).toBeTruthy();
  });
});