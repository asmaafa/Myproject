import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CarsComponent} from "./components/fleet/Cars/Cars.component";
import {FaceComponent} from "./components/home/face/face.component";
import {ServicesComponent} from "./components/service/services/services.component";
// Import all other components here 

const APP_ROUTES : Routes = [
 
  { path : 'Cars' , component:CarsComponent},
  { path : 'face' , component:FaceComponent }
  
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
