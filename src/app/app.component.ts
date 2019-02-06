import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee/employee.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  readonly _emplService: EmployeeService;
  constructor(emplService: EmployeeService) {
    this._emplService = emplService;
}
  resetTimeCards() {
    this._emplService.clearTimeCards();
  }
}
