import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isGetDataCalled: boolean = false; 

  regForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required, Validators.min(20), Validators.max(40)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get NameValid() {
    return !this.isGetDataCalled || this.regForm.controls["name"].valid;
  }
  get AgeValid() {
    return !this.isGetDataCalled || this.regForm.controls["age"].valid;
  }
  get EmailValid() {
    return !this.isGetDataCalled || this.regForm.controls["email"].valid;
  }

  getData() {
    this.isGetDataCalled = true;
  }
}
