import {
  animate,
  animation,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { getImage } from 'src/app/helpers/get-image';
import { Image, OptometricImage } from 'src/app/interfaces/api.interface';

@Component({
  selector: 'app-image-optometrie-full-screen',
  templateUrl: './image-optometrie-full-screen.component.html',
  styleUrls: ['./image-optometrie-full-screen.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [style({ opacity: 0 }), animate(300)]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave', animate(300, style({ opacity: 0 }))),
    ]),
  ],
})
export class ImageOptometrieFullScreenComponent implements OnInit {
  @Input('opShowOptoImage') showOptoImage: OptometricImage | null = null;
  @Input('opPxToCm') pxToCm: number | null = null;

  @Output('opHideImage') hideImage = new EventEmitter<void>();

  get url() {
    return this.showOptoImage ? getImage(this.showOptoImage.image) : '';
  }
  get imgWidth() {
    console.log('image width: ', this.showOptoImage?.image_width);
    console.log('ratio: ', this.pxToCm);
    return (this.showOptoImage?.image_width || 0) * (this.pxToCm || 0);
  }
  constructor() {}

  ngOnInit(): void {}
}
