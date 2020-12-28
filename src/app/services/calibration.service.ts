import { Injectable } from '@angular/core';

const ratioKey = 'APP_pxToCmRatio';

@Injectable({
  providedIn: 'root',
})
export class CalibrationService {
  defaultPxToCm = 32.3;
  private _pxToCm: number | null = null;

  get pxToCm() {
    return this._pxToCm || this.defaultPxToCm;
  }
  get calibrated() {
    return !!this._pxToCm;
  }

  constructor() {
    const ratio = Number(localStorage.getItem(ratioKey));
    console.log('Ratio form localStorage: ', ratio);
    this._pxToCm = ratio;
  }

  updateRatio(ratio: number) {
    localStorage.setItem(ratioKey, ratio.toString());
    this._pxToCm = ratio;
  }
}
