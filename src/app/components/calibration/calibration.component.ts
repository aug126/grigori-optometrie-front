import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalibrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
