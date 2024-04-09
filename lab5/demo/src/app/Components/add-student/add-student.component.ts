import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { StudentsService } from '../../../service/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [HttpClientModule],
  providers:[StudentsService],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  constructor(private studentService:StudentsService,private router: Router){}

  Add(name:any, age:any, phone:any, email:any){
    let newStudent = {name, age, phone, email};
    this.studentService.AddStudent(newStudent).subscribe();
    this.router.navigate(['/students']);
  }
}
