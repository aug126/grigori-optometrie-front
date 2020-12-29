import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const ratioKey = 'APP_pxToCmRatio';

@Injectable({
  providedIn: 'root',
})
export class CalibrationService {
  private defaultPxToCm = 32.3;
  private _pxToCm: number | null = null;

  private _refreshSize$ = new Subject<number>();
  refreshSize$ = this._refreshSize$.asObservable();

  get pxToCm() {
    return this._pxToCm || this.defaultPxToCm;
  }
  get calibrated() {
    return !!this._pxToCm;
  }

  constructor() {
    const ratio = Number(localStorage.getItem(ratioKey));
    this._pxToCm = ratio;
  }

  updateRatio(ratio: number) {
    localStorage.setItem(ratioKey, ratio.toString());
    this._pxToCm = ratio;
  }
  refreshSize(e: Event) {
    const width = (e.target as Window).innerWidth;
    this._refreshSize$.next(width);
  }
}
