import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
  vehicle: any;

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.vehicle = {
      "vehicleId": id,
      "make": "Chevrolet",
      "model": "Suburban",
      "licensePlate": "IJ8329"
    };
  }

}
