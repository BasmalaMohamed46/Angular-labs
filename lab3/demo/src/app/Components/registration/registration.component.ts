import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  name="";
  age="";
  newStudent:any;

  @Output() myevent=new EventEmitter();

  send()
  {
    if(this.name.length>=3 && +this.age>=10 && +this.age<=30) {
      this.newStudent={name:this.name,age:this.age};
      this.myevent.emit(this.newStudent);
    }
  }


}
