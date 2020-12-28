import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalibrationComponent implements OnInit {
  @Input('opOpenedCalibration') openedCalibration: boolean = false;
  @Output('opOpenCalibration') openCalibration = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
}
