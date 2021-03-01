import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DieteticsComponent } from './dietetics/dietetics.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'video', component: VideoComponent},
  { path: 'dietetics', component: DieteticsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
