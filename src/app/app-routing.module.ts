import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { GoogleMapsAdvancedMarkerComponent } from './google-maps-advanced-marker/google-maps-advanced-marker.component';

const routes: Routes = [
  { path: '', component: GoogleMapsComponent },
  { path: 'marker', component: GoogleMapsAdvancedMarkerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
