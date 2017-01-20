import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../home/service';

@Component({
    selector: 'patient-component',
    templateUrl: './app/patient/patient.component.html'
})
export class PatientComponent {
    public patientId: number;
    public patient: any;

    constructor(currentRoute: ActivatedRoute,
        httpService: Service) {

        currentRoute.params.subscribe(params => {
            this.patientId = parseInt(params.id);

            httpService.getById(this.patientId).subscribe((patient) => {
                this.patient = patient;
            });
        });
    }

    savePatient(patient: any) {
        alert(patient.SSN);
    }
}