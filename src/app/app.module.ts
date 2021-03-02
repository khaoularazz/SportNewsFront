import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DieteticsComponent } from './dietetics/dietetics.component';

import { VideoComponent } from './video/video.component';

import { FootballCategoryComponent } from './football-category/football-category.component';
import { CyclingCategoryComponent } from './cycling-category/cycling-category.component';
import { GolfCategoryComponent } from './golf-category/golf-category.component';
import { TennisCategoryComponent } from './tennis-category/tennis-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DieteticsComponent,
    VideoComponent,
    FootballCategoryComponent,
    CyclingCategoryComponent,
    GolfCategoryComponent,
    TennisCategoryComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
