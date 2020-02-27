import { Component, OnInit } from '@angular/core';
import { IVehicle } from './vehicle';
import { VehicleService } from './vehicle.service';

@Component({
    selector: 'app-vehicle-list',
    templateUrl: './vehicle-list.component.html',
    styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
    vehicles: IVehicle[];

    constructor(private vehicleService: VehicleService) {

    }

    vehicleIdHandler() {
        console.log("Clicked");
    }

    ngOnInit(): void {
        this.vehicleService.getVehicles().subscribe({
            next: vehicles => this.vehicles = vehicles
        });
    }
}