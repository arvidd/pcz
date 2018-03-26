import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Address} from "./shared/address.model";

@Component({
  selector: 'map-detail',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})

export class MapComponent { 
  lat: number;
  lng: number;
  zom: number = 16;
 
  @Input() address : Address;
  @Output() clear : EventEmitter<boolean> = new EventEmitter<boolean>();

  clearDetails() {
    this.address = null;

    // also clear the inputs of the app component (parent)
    this.clear.emit(true); 
  }

}
