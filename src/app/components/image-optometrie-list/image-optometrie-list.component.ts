import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}
