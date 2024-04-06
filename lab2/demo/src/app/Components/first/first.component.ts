import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  myText="";

  getData(e:any){
    this.myText = e.target.value;
  }
  reset(){
    this.myText = "";
  }
}
