import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HomeContent, OptometricImages } from '../interfaces/api.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api = environment.api;

  optoImages$: Observable<OptometricImages>;
  homeContent$: Observable<HomeContent>;

  constructor(private http: HttpClient) {
    this.optoImages$ = this.getOptoImages$();
    this.homeContent$ = this.getHomeContent();
  }

  getOptoImages$() {
    return this.http.get<OptometricImages>(this.api + '/optometric-images');
  }

  getHomeContent() {
    return this.http.get<HomeContent>(this.api + '/home-content');
  }
}
