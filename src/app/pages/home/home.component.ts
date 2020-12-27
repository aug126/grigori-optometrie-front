import { Component, Input, OnInit } from '@angular/core';
import { HomeContent } from 'src/app/interfaces/api.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  constructor(public api: ApiService) {}

  ngOnInit(): void {}
}
