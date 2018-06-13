import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FaceComponent } from './components/home/face/face.component';
import { CarsComponent } from './components/fleet/Cars/Cars.component';
import { ServicesComponent } from './components/service/Services/Services.component';

import { Routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    FaceComponent,
    CarsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
   
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
