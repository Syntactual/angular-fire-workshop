import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Observable<any[]>;
  constructor(employeeService: EmployeeService) {
  this.employees = employeeService.getEmployeeInfo();
   }

  ngOnInit() {
  }

}
