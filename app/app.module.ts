import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';
import { PatientComponent } from './patient/patient.component';
import { Service } from './home/service';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'patients', component: OtherComponent },
    { path: 'patients/:id', component: PatientComponent }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes), HttpModule, FormsModule],
    declarations: [AppComponent,
        HomeComponent,
        OtherComponent,
        PatientComponent],
    bootstrap: [AppComponent],
    providers: [Service]
})
export class AppModule { }
