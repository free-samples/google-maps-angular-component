import { Component } from '@angular/core';
import { MapAdvancedMarker} from '@angular/google-maps';

@Component({
  selector: 'app-google-maps-advanced-marker',
  templateUrl: './google-maps-advanced-marker.component.html',
  styleUrl: './google-maps-advanced-marker.component.css'
})
export class GoogleMapsAdvancedMarkerComponent {
  center: google.maps.LatLngLiteral = {lat: 34.02446609470537, lng: -5.008190274280746};
  zoom = 5;
  advancedMarkerOptions: google.maps.marker.AdvancedMarkerElementOptions = {gmpDraggable: false};
  advancedMarkerPositions: google.maps.LatLngLiteral[] = [];

  addAdvancedMarker(event: google.maps.MapMouseEvent) {
    if(event.latLng){
      console.log(event.latLng.toJSON());
      this.advancedMarkerPositions.push(event.latLng.toJSON());
    }
  }
}
