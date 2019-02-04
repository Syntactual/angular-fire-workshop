import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EmployeeViewModel, Employee, TimeCard } from './employee.viewModel';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeViewModel: EmployeeViewModel;
  readonly _db: AngularFirestore;
  constructor(db: AngularFirestore) {
    this._db = db;
    this.employeeViewModel = new EmployeeViewModel();
  }

  getEmployeeInfo(): EmployeeViewModel {
    const employeeDoc = this._db.doc<Employee>('Employees/aEcYJmejgnjuYe8d4ukx');
    const timeCardCollection = employeeDoc.collection<TimeCard>('TimeCards', ref => ref.orderBy('Date', 'asc'));
    const employee$: Observable<Employee> = employeeDoc.valueChanges();
    const timeCards$: Observable<TimeCard[]> = timeCardCollection.valueChanges();

    employee$.subscribe(emp => {
      this.employeeViewModel.FirstName = emp.FirstName;
      this.employeeViewModel.LastName = emp.LastName;
    });
    // this.employeeViewModel.Employee$ = this.employee$;
    this.employeeViewModel.TimeCards$ = timeCards$;

    return this.employeeViewModel;

  }

  createNewTimeCardByEmployeeID(employeeId: string, timeCard: TimeCard) {
    const employeeDoc = this._db.doc<Employee>(`Employees/${employeeId}`);
    employeeDoc.collection<TimeCard>('TimeCards').add(timeCard);
  }
}
