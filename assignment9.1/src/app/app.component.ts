import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyRevPipe } from "./my-rev.pipe";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MyRevPipe]
})
export class AppComponent {
  title = 'assignment9.1';

  Name :string = "Marvellous";
}
