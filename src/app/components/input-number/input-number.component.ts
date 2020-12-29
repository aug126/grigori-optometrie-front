import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ElementRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberComponent implements OnInit {
  @Input('opOldMesure') set oldMesure(value: string | null) {
    this.value = value || '0';
  }
  @Output('opMesureChange') mesureChange = new EventEmitter<string>();
  value = '0';
  constructor() {}

  ngOnInit(): void {}

  handleMinus(e: MouseEvent) {
    e.preventDefault();
    this.value = (Number(this.value) - 0.1).toFixed(1);
    this.mesureChange.emit(this.value);
  }
  handlePlus(e: MouseEvent) {
    e.preventDefault();
    this.value = (Number(this.value) + 0.1).toFixed(1);
    this.mesureChange.emit(this.value);
  }

  mesureChangeEmit(e: Event) {
    this.mesureChange.emit(this.value);
  }

  selectContent(e: MouseEvent) {
    const input: HTMLInputElement = e.target as any;
    input.select();
  }
}
