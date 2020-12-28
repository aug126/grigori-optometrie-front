import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HomeContent, OptometricImage } from '../interfaces/api.interface';
import { combineAll, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api = environment.api;

  optoImages$: Observable<OptometricImage[]>;
  homeContent$: Observable<HomeContent>;

  constructor(private http: HttpClient) {
    this.optoImages$ = this.getOptoImages$();
    this.homeContent$ = this.getHomeContent();
  }

  private getOptoImages$() {
    return this.http
      .get<OptometricImage[]>(this.api + '/optometric-images')
      .pipe(share());
  }

  private getHomeContent() {
    return this.http.get<HomeContent>(this.api + '/home-content').pipe(share());
  }
}
