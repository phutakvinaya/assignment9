import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyAddPipe } from "./my-add.pipe";
import { MyMultPipe } from "./my-mult.pipe";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MyAddPipe, MyMultPipe]
})
export class AppComponent {
  title = 'assignment9.2';
  add:number = 8;
  mult:number = 7;
}
