import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapContentComponent } from './mapcore.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { HttpModule } from '@angular/http';


@NgModule({
  imports:      [
    HttpModule,
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: ''
    }),
    AgmJsMarkerClustererModule,

  ],
  declarations: [ AppComponent, MapContentComponent],
  bootstrap:    [ AppComponent ],
  providers: [GoogleMapsAPIWrapper]
})
export class AppModule { }
