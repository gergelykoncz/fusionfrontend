import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    public name: string;

    constructor() {
        this.name = 'Angulakkr';
    }
}
