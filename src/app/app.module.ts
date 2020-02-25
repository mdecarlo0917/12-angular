import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { PassListComponent } from './passes/pass-list.component';
import { VehicleListComponent } from './vehicles/vehicle-list.component';
import { VehicleDetailComponent } from './vehicles/vehicle-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { VehicleDetailGuard } from './vehicles/vehicle-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    PassListComponent,
    VehicleListComponent,
    VehicleDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'passes', component: PassListComponent },
      { path: 'vehicles', component: VehicleListComponent },
      { path: 'vehicles/:id', component: VehicleDetailComponent, canActivate: [VehicleDetailGuard] },
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
