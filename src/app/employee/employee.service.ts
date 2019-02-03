import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { defineBase } from '@angular/core/src/render3';
import { EmployeeViewModel, Employee, TimeCard } from './employee.viewModel';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeDoc: AngularFirestoreDocument<Employee>;
  private timeCardCollection: AngularFirestoreCollection<TimeCard>;
  private employee: Observable<Employee>;
  private timeCards: Observable<TimeCard[]>;
  employeeViewModel: EmployeeViewModel;
  readonly _db: AngularFirestore;
  constructor(db: AngularFirestore) {
    this._db = db;
    this.employeeViewModel = new EmployeeViewModel();
  }

  getEmployeeInfo(): EmployeeViewModel {
    this.employeeDoc = this._db.doc<Employee>('Employees/aEcYJmejgnjuYe8d4ukx');
    this.timeCardCollection = this.employeeDoc.collection<TimeCard>('TimeCards');
    this.employee = this.employeeDoc.valueChanges();
    this.timeCards = this.timeCardCollection.valueChanges();

    this.employee.subscribe(emp => {
      this.employeeViewModel.FirstName = emp.FirstName;
      this.employeeViewModel.LastName = emp.LastName;
    });
    
    this.employeeViewModel.TimeCards = this.timeCards;
    
    
    return this.employeeViewModel;
      
      
      
     
    

  }
}
