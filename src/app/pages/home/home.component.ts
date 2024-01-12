import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { OptometricImage } from 'src/app/interfaces/api.interface';
import { CalibrationService } from 'src/app/services/calibration.service';
import { config } from '../../../config/config';
import { homeText } from './home-text';
import { homeImages } from './home-images';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  openedOptoImage: OptometricImage | null = null;
  openedCalibration: boolean = false;

  connected = false;
  code = config.code;

  text: string = homeText;
  images: OptometricImage[] = homeImages;

  constructor(
    public calibrationS: CalibrationService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams
      .pipe(
        map((params) => {
          return params['code'];
        }),
        first()
      )
      .subscribe((queryCode) => {
        if (queryCode === this.code) {
          localStorage.setItem('codeSuccess', 'true');
          this.connected = true;
        }
      });
  }

  ngOnInit(): void {
    // TODO we should use a guard
    if (localStorage.getItem('codeSuccess') === 'true') {
      this.connected = true;
    }
  }

  openCalibration() {
    this.openedCalibration = !this.openedCalibration;
  }
}
