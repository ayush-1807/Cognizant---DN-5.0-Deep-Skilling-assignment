import { CanDeactivateFn } from '@angular/router';

export const unsavedChangesGuard: CanDeactivateFn<any> = () => {
  return confirm('Leave this page?');
};