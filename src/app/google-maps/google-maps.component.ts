import { Component } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrl: './google-maps.component.css'
})
export class GoogleMapsComponent {
  options: google.maps.MapOptions = {
    mapId: "map",
    center: { lat: 19.427004323029855, lng: -99.16766541782458 },
    zoom: 4,
  };
}
