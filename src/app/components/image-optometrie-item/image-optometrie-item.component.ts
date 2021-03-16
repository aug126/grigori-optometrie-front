import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { getImage } from 'src/app/helpers/get-image';
import { OptometricImage } from 'src/app/interfaces/api.interface';

@Component({
  selector: 'app-image-optometrie-item',
  templateUrl: './image-optometrie-item.component.html',
  styleUrls: ['./image-optometrie-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageOptometrieItemComponent implements OnInit {
  @Input('opOptometricImage') optometricImage!: OptometricImage;

  @Output('opOpenOptoImage')
  openOptoImage = new EventEmitter<OptometricImage>();

  get preview() {
    return getImage(
      this.optometricImage.preview || this.optometricImage.image,
      'medium'
    );
  }
  constructor() {}

  ngOnInit(): void {}

  emitOpenImage() {
    this.openOptoImage.emit(this.optometricImage);
  }
}
