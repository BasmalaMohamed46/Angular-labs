import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { OneStudentComponent } from '../one-student/one-student.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentsService } from '../../../service/students.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [RouterOutlet,OneStudentComponent,HttpClientModule,RouterModule,FontAwesomeModule],
  providers:[StudentsService],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent  implements OnInit{
  constructor(private studentService:StudentsService){}
  Students:any;
  ngOnInit(): void {


    this.studentService.GetAllStudents().subscribe({
      next:(data)=>{
        this.Students = data;
      },
      error:(err)=>{console.log("7asal Error")}
    })
  }
}