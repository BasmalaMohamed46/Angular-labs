import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { first } from 'rxjs';
import { FirstComponent } from './Components/first/first.component';
import { SecondComponent } from './Components/second/second.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, SecondComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
