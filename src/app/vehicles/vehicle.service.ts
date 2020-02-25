import { Injectable } from '@angular/core';
import { IVehicle } from './vehicle';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {

    getVehicles(): IVehicle[] {
        return [
            {
                "vehicleId": 1,
                "make": "Jeep",
                "model": "Wrangler",
                "licensePlate": "J89374"
            },
            {
                "vehicleId": 2,
                "make": "Toyota",
                "model": "Camry",
                "licensePlate": "J88322"
            },
            {
                "vehicleId": 3,
                "make": "Ford",
                "model": "Focus",
                "licensePlate": "P83948"
            },
            {
                "vehicleId": 4,
                "make": "Subaru",
                "model": "Outback",
                "licensePlate": "M88483"
            }
        ];
    }
}