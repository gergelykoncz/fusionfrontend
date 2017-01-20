//import { Component } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
//import { Service } from '../home/service';

//@Component({
//    selector: 'smart-box',
//    templateUrl: './app/smartbox/smartbox.html'
//})
//export class SmartBoxComponent {
//    public scannedValue: number;
//    public errorMessage: string;
//    private httpService: Service;

//    constructor(httpService: Service) {
//        this.httpService = httpService;
//    }

//    validateMe(scannedValue: string) {
//        this.httpService.getById(`http://blabla.com?value=${scannedValue}`)
//            .subscribe((res) => {
//                if (res.error) {
//                    this.errorMessage = res.error;
//                    document.getElementById('me').focus();
//                }
//            });
//    }
//}