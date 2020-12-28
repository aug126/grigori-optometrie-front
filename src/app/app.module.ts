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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
