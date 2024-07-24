import { HttpInterceptorFn } from '@angular/common/http';
import { LoadService } from '../services/load.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loadInterceptor: HttpInterceptorFn = (req, next) => {
  const loadService = inject(LoadService);

  if (req.headers.get('X-LOADING') === 'false') {
    return next(req);
  }

  loadService.showLoader();

  return next(req).pipe(finalize(() => loadService.hideLoader()));
};
