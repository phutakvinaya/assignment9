import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MarvellousChkPipe } from "./marvellous-chk.pipe";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MarvellousChkPipe]
})
export class AppComponent {
  title = 'assignment9.3';
  no:any = 11;
}
