import { Component } from '@angular/core';
//import { componentFactoryName } from '@angular/compiler';

@Component({
    selector: 'app-grocery',
    templateUrl: './app.grocery.html',
    styleUrls: [
        '../assets/bootstrap/dist/css/bootstrap.min.css'
    ]

})

export class GroceryComponent{
    task: string;
    tasks = [];

    onClick() {
        this.tasks.push({ name: this.task });
        this.task = '';
    }
}

