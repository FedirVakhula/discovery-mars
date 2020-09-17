import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './components/home/home.component';
import { RoverPropertiesComponent } from './components/rover-properties/rover-properties.component';
import { ViewPhotoComponent } from './components/view-photo/view-photo.component';

const routes: Routes = [{
  path: 'mars',
  component: HomeComponent
},
{
  path: 'mars/:name',
  component: RoverPropertiesComponent
},
{
  path: 'photo',
  component: ViewPhotoComponent
},
{
  path: '',
  redirectTo: '/mars',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), CarouselModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
