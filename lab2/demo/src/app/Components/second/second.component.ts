import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  myImg="assets/Images/1.jpg";
  i=1;
  myInterval:any;

  next(){
   if(this.i<5){
     this.i++;
   }
   this.myImg = "assets/Images/"+this.i+".jpg";
  }
  prev(){
    if(this.i>1){
      this.i--;
    }
    this.myImg = "assets/Images/"+this.i+".jpg";
  }
  slide(){
    this.myInterval=setInterval(()=>{
      if(this.i<5){
        this.i++;
      }else{
        this.i=1;
      }
      this.myImg = "assets/Images/"+this.i+".jpg";
    
    },2000)

  }
  stop(){
    this.myInterval=clearInterval(this.myInterval); 
  }

}
