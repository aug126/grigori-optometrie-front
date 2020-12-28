import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input('opTitle') title?: string;
  @Input('opText') text?: string;
  @Input('opOpenedCalibration') openedCalibration: boolean = false;

  @Output('opOpenCalibration') openCalibration = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
}
