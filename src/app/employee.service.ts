import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { defineBase } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  readonly _db: AngularFirestore;
  constructor(db: AngularFirestore) {
    this._db = db;
  }

  getEmployeeInfo() {
    return this._db.collection('Employees').valueChanges();
  }
}
