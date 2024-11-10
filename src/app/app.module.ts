import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { GoogleMapsModule, MapAdvancedMarker } from "@angular/google-maps";
import { GoogleMapsAdvancedMarkerComponent } from './google-maps-advanced-marker/google-maps-advanced-marker.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent,
    GoogleMapsAdvancedMarkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
