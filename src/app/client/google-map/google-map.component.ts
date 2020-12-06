import { Component, OnInit } from '@angular/core';

import { MouseEvent } from '@agm/core';


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent {
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 36.906468168089894;
  lng: number = 10.190383448283775;

  marker: marker = {
      lat: 35.88877683395515,
      lng: 9.772832543533342,
      label: 'A',
      draggable: true
    };

  clickedMarker(label: string) {
    console.log(`clicked the marker: ${label}`);
  }

  mapClicked($event: MouseEvent) {
    this.marker = {
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      label: 'A',
      draggable: true
    };
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
