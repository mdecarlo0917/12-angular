import { Component } from '@angular/core';

@Component({
    selector: 'up-passes',
    templateUrl: './pass-list.component.html'
})
export class PassListComponent {
    passNumber: number = 837235;
    passType: string = "U";
    expirationDate: Date = new Date("2020-05-01");
    vehicles: string = "E09283";
    passes: any[] = [
        {
            "passNumber": 837235,
            "passType": "U",
            "expirationDate": "2020-05-01",
            "vehicles": "E09283"
        },
        {
            "passNumber": 289843,
            "passType": "A",
            "expirationDate": "2020-05-01",
            "vehicles": "L94203"
        },
        {
            "passNumber": 947583,
            "passType": "CU",
            "expirationDate": "2020-05-01",
            "vehicles": "J834J3"
        },
        {
            "passNumber": 184960,
            "passType": "U",
            "expirationDate": "2020-05-01",
            "vehicles": "JU84J3"
        },
        {
            "passNumber": 485739,
            "passType": "A",
            "expirationDate": "2020-05-01",
            "vehicles": "H84894"
        }
    ];
}