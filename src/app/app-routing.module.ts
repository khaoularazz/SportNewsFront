import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DieteticsComponent } from './dietetics/dietetics.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { FootballCategoryComponent } from './football-category/football-category.component';
import { CyclingCategoryComponent } from './cycling-category/cycling-category.component';
import { GolfCategoryComponent } from './golf-category/golf-category.component';
import { TennisCategoryComponent } from './tennis-category/tennis-category.component';
const routes: Routes = [
  { path : '' , component : HomeComponent},
 { path : 'FootBall' , component : FootballCategoryComponent},
 { path : 'Tennis' , component : TennisCategoryComponent},
 { path : 'Golf' , component : GolfCategoryComponent},
 { path : 'Cyclisme' , component : CyclingCategoryComponent},
 { path : 'Dietetics' , component : DieteticsComponent},
  { path: 'video', component: VideoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }