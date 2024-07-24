import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadService {
  private _showLoader = false;

  showLoader() {
    this._showLoader = true;
  }

  hideLoader() {
    this._showLoader = false;
  }

  get isLoading() {
    return this._showLoader;
  }
}
