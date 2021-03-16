import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  @Output() connect = new EventEmitter<void>();

  @Input() code = '';
  constructor() {}

  ngOnInit(): void {}

  tryPass(pass: string) {
    if (pass === this.code) {
      localStorage.setItem('codeSuccess', 'true');
      this.connect.emit();
    }
  }
}
