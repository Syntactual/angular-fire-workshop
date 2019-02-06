import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeViewModel, Employee, TimeCard } from './employee.viewModel';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeViewModel: EmployeeViewModel;
  readonly employeeId;
  readonly _db: AngularFirestore;
  constructor(db: AngularFirestore) {
    this._db = db;
    this.employeeViewModel = new EmployeeViewModel();
    this.employeeId = 'aEcYJmejgnjuYe8d4ukx';
  }

  getEmployeeInfo(): EmployeeViewModel {
    const employeeDoc = this._db.doc<Employee>('Employees/aEcYJmejgnjuYe8d4ukx');
    const timeCardCollection = employeeDoc.collection<TimeCard>('TimeCards', ref => ref.orderBy('Date', 'asc'));
    const employee$: Observable<Employee> = employeeDoc.snapshotChanges().pipe(map( a => {
        const data = a.payload.data() as Employee;
        data.id = a.payload.id;
        return data;
    }));
    const timeCards$: Observable<TimeCard[]> = timeCardCollection.snapshotChanges().pipe(map( a => {
      return a.map( d => {
        const data = d.payload.doc.data() as TimeCard;
        data.id = d.payload.doc.id;
        return data;
      });
    }));

    employee$.subscribe(emp => {
      this.employeeViewModel.id = emp.id;
      this.employeeViewModel.FirstName = emp.FirstName;
      this.employeeViewModel.LastName = emp.LastName;
    });
    // this.employeeViewModel.Employee$ = this.employee$;
    this.employeeViewModel.TimeCards$ = timeCards$;

    return this.employeeViewModel;

  }

  updateApproveToTrueByDocId(employeeId: string, timeCardId: string) {
    const employeeDoc = this._db.doc<Employee>(`Employees/${employeeId}`);
    employeeDoc.collection<TimeCard>('TimeCards').doc<TimeCard>(`${timeCardId}`).update({Approved : true});

  }

  createNewTimeCardByEmployeeID(employeeId: string, timeCard: TimeCard) {
    const employeeDoc = this._db.doc<Employee>(`Employees/${employeeId}`);
    employeeDoc.collection<TimeCard>('TimeCards').add(timeCard);
  }

  clearTimeCards() {
    const employeeDoc = this._db.doc<Employee>(`Employees/${this.employeeId}`);
    employeeDoc.collection<TimeCard>('TimeCards').snapshotChanges().forEach(s => {
      s.forEach(element => {
        employeeDoc.collection<TimeCard>('TimeCards').doc(element.payload.doc.id).delete();
      });
    });

  }
}
