import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule ,Router} from '@angular/router';
import { StudentsService } from '../../../service/students.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [HttpClientModule,RouterModule],
  providers:[StudentsService],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {
  ID:any;//undefined
  student:any;//undefined
  constructor(myRoute:ActivatedRoute,private studentService:StudentsService,private router:Router){
    this.ID = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.studentService.GetStudentByID(this.ID).subscribe({
      next:(data)=>{

        this.student = data;
      },
      error:(err)=>{console.log("7asal Error")}
    })
  }
  Delete() {
    let answer = confirm('Are you sure you want to delete this student?');
    if (answer) {
      this.studentService.DeleteStudentByID(this.ID).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }

}
}
