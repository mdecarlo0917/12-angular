import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IVehicle } from './vehicle';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {
    private vehicleUrl = 'assets/vehicles/vehicles.json';

    constructor(private http: HttpClient) { }

    getVehicles(): Observable<IVehicle[]> {
        return this.http.get<IVehicle[]>(this.vehicleUrl);
    }
}