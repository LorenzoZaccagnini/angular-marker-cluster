import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 45.116177;
  lng: number = 7.742615;

  url = 'https://api.citybik.es/v2/networks/to-bike';
  stationsArr;

  constructor(private http: Http) {
    this.http.get(this.url).subscribe(res => {
      console.log(res.json())
      this.stationsArr = res.json().network.stations
      console.log(this.stationsArr)
    });

   }



  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  getIconUrl(fuel): string {
    let color = 0;
    color = 100 + (fuel * 2 + 100);
    return `data:image/svg+xml;utf-8, \
      <svg viewBox="143.61300659179688 143.61399841308594 212.7729949951172 212.7729949951172" width="50.7729949951172" height="50.7729949951172" xmlns="http://www.w3.org/2000/svg">
  <ellipse style="fill: rgb(0, ${fuel}, 0);" transform="matrix(1, 0.00003300000389572233, -0.00003300000389572233, 1, 32.94464874267578, 108.52285766601562)" cx="217.06" cy="141.47" rx="106.383" ry="106.383"/>
  <ellipse transform="matrix(1.0000009536743164, -0.00005400000372901559, 0.000055000004067551345, 0.9999989867210388, -29.835203170776367, -24.2598876953125)" cx="220.527" cy="282.247" rx="28.058" ry="28.058" style="fill: rgb(255, 255, 255);"/>
  <ellipse transform="matrix(1.0000009536743164, -0.00005300000339047983, 0.00005400000372901559, 1, 83.89558410644531, -25.64687728881836)" cx="220.527" cy="282.247" rx="28.058" ry="28.058" style="fill: rgb(255, 255, 255);"/>
  <rect x="236.477" y="290.569" width="109.57" height="12.483" transform="matrix(1, 0, 0, 1.0000009536743164, -40.22187423706055, -38.83530044555664)" style="fill: rgb(255, 255, 255);"/>
  <rect x="189.469" y="228.522" width="68.264" height="12.428" style="fill: rgb(255, 255, 255);" transform="matrix(0.8416969776153564, -0.539950966835022, 0.4603320062160492, 0.8927739262580872, -88.21641540527344, 152.49951171875)"/>
  <rect x="189.469" y="228.522" width="68.264" height="12.428" style="fill: rgb(255, 255, 255);" transform="matrix(0.9924749732017517, 0.12245400249958038, -0.2163340002298355, 0.9808900356292725, 95.85308837890625, -28.088279724121094)"/>
  <rect x="189.469" y="228.521" width="68.264" height="12.428" style="fill: rgb(255, 255, 255);" transform="matrix(0.2967590391635895, 0.9549520611763, -0.9830220937728882, 0.20642700791358948, 456.3499450683594, -41.45731735229492)"/>
</svg>`
  }



  getColor() {

  }
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true,
      fuel: 10
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false,
      fuel: 50
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true,
      fuel: 100
    }
  ]
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  fuel?: number;
  label?: string;
  draggable: boolean;
}
