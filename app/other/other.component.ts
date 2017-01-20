import { Component } from '@angular/core';
import { Service } from '../home/service';
import * as moment from 'moment/moment';

@Component({
    selector: 'other-component',
    templateUrl: './app/other/other.component.html'
})
export class OtherComponent {
    private service: Service;
    public message: string;
    public patients: any[];
    public moment: any;

    constructor(_service: Service) {
        this.service = _service;
        this.moment = moment;

        this.service.getAll().subscribe((res) => {
            this.patients = res;
        });
    }

    formatDate(date: Date) {
        return moment(date).format('dddd, MMMM Do YYYY');
    }
}