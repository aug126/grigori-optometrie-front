import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { getImage } from 'src/app/helpers/get-image';
import { Image, OptometricImage } from 'src/app/interfaces/api.interface';

@Component({
  selector: 'app-image-optometrie-list',
  templateUrl: './image-optometrie-list.component.html',
  styleUrls: ['./image-optometrie-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageOptometrieListComponent implements OnInit {
  @Input('opOptometricImages') optometricImages: OptometricImage[] | null = [];
  @Output('opOpenOptoImage')
  openOptoImage = new EventEmitter<OptometricImage>();

  getSafeImage(image: Image) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(getImage(image));
  }
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
}
