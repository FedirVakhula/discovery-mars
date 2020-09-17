import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoverPropertiesComponent } from './components/rover-properties/rover-properties.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ViewPhotoComponent } from './components/view-photo/view-photo.component';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RoverPropertiesComponent,
    ViewPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
