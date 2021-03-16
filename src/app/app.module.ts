import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CalibrationComponent } from './components/calibration/calibration.component';
import { ImageOptometrieItemComponent } from './components/image-optometrie-item/image-optometrie-item.component';
import { ImageOptometrieListComponent } from './components/image-optometrie-list/image-optometrie-list.component';
import { ImageOptometrieFullScreenComponent } from './components/image-optometrie-full-screen/image-optometrie-full-screen.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalibrationFullScreenComponent } from './components/calibration-full-screen/calibration-full-screen.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalibrationComponent,
    ImageOptometrieItemComponent,
    ImageOptometrieListComponent,
    ImageOptometrieFullScreenComponent,
    HomeComponent,
    CalibrationFullScreenComponent,
    InputNumberComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: HomeComponent }]),
    HttpClientModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
