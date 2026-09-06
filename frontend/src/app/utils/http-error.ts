import { HttpErrorResponse } from '@angular/common/http';

export function resolveHttpError(error: HttpErrorResponse, fallback: string): string {
  const details = error.error?.details;
  if (Array.isArray(details) && details.length > 0) {
    return details.join('. ');
  }

  return error.error?.message || error.error?.error || fallback;
}
