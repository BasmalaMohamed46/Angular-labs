import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationComponent } from './Components/registration/registration.component';
import { StudentsComponent } from './Components/students/students.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegistrationComponent,StudentsComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
  students: any[] = []; 

  getData(e: any) {
    console.log(e);
    this.students.push(e);
  }
}
