import { Component, Input, OnInit } from '@angular/core';
import {
  HomeContent,
  Image,
  OptometricImage,
} from 'src/app/interfaces/api.interface';
import { ApiService } from 'src/app/services/api.service';
import { CalibrationService } from 'src/app/services/calibration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  openedOptoImage: OptometricImage | null = null;
  openedCalibration: boolean = false;

  constructor(
    public apiS: ApiService,
    public calibrationS: CalibrationService
  ) {}

  ngOnInit(): void {}

  openCalibration() {
    this.openedCalibration = !this.openedCalibration;
  }
}
