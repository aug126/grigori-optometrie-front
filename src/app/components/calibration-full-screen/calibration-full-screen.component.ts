import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-calibration-full-screen',
  templateUrl: './calibration-full-screen.component.html',
  styleUrls: ['./calibration-full-screen.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ transform: 'translateY(-120%)', opacity: 0 }),
        animate(300),
      ]),
      // fade out when destroyed. this could also be written as transition('void => *')
      transition(
        ':leave',
        animate(300, style({ transform: 'translateY(-120%)', opacity: 0 }))
      ),
    ]),
  ],
})
export class CalibrationFullScreenComponent implements OnInit {
  private _showCalibration: boolean = false;
  @Input('opRefreshSize') set refreshSize(value: number | null) {
    console.log('Refresh SIZE');
    this._refreshSize();
  }

  @Input('opShowCalibration')
  set showCalibration(value: boolean) {
    this._showCalibration = value;
    this._refreshSize();
  }
  get showCalibration() {
    return this._showCalibration;
  }

  @Input('opOldPxToCmRatio') oldPxToCmRatio: number | null = null;

  @Output('opHideCalibration') hideCalibration = new EventEmitter<void>();
  // ratio to calibrate
  @Output('opPxToCmRatio') pxToCmRatio = new EventEmitter<number>();

  @ViewChildren('rect') rect: QueryList<
    ElementRef<HTMLDivElement>
  > | null = null;

  // rectangle to mesure and used to compare mesure with size in px
  mesureCmWidth$: Subject<string | null> = new Subject();
  constructor() {}

  ngOnInit(): void {}

  updateWidthMesured(mesure: string) {
    const mesureCmWidth = mesure;
    this.mesureCmWidth$.next(mesureCmWidth);
    const mesurePxWidth = this.rect?.first?.nativeElement?.offsetWidth || 1;
    const pxToCm = mesurePxWidth / Number(mesureCmWidth); // px per cm
    console.log('coef computed: ', pxToCm);
    this.pxToCmRatio.emit(pxToCm);
  }

  private _refreshSize() {
    // compute mesure with old ratio
    setTimeout(() => {
      if (!this.rect) {
        return;
      }
      let oldCmMesure: number | string =
        (this.rect?.first?.nativeElement?.offsetWidth || 1) /
        (this.oldPxToCmRatio || 0);
      oldCmMesure = parseFloat(oldCmMesure.toString()).toFixed(1);
      this.mesureCmWidth$.next(oldCmMesure);
    }, 10);
  }
}
