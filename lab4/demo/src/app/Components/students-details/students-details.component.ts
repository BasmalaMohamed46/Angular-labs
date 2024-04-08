import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-details',
  standalone: true,
  imports: [],
  templateUrl: './students-details.component.html',
  styleUrl: './students-details.component.css'
})

export class StudentsDetailsComponent  {
  ID = 0;
  constructor(myRoute: ActivatedRoute) {
    this.ID = myRoute.snapshot.params['id'];
  }
}
