import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsServiceService {

  url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyDgrpK5AUEJWZ3plzzsX5l25J8inJ72o_s';
  constructor() { }
}
