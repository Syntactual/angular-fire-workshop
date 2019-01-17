import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.students = db.collection('Students').valueChanges();
  }

  ngOnInit() {
  }

}
