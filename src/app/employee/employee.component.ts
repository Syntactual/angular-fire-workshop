import { Component, OnInit } from '@angular/core';
import { EmployeeViewModel } from './employee.viewModel';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: EmployeeViewModel;
  constructor(employeeService: EmployeeService) {
  this.employee = employeeService.getEmployeeInfo();
   }

  ngOnInit() {
       
  }

}
