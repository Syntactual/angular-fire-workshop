import { Component, OnInit, Input } from '@angular/core';
import { EmployeeViewModel, TimeCard } from './employee.viewModel';
import { EmployeeService } from './employee.service';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: EmployeeViewModel;
  showCreateTimeCard: boolean;
  readonly _employeeService: EmployeeService;
  @Input() newTimeCard: TimeCard;
  readonly _employeeID: string;
  constructor(employeeService: EmployeeService) {
  this.employee = employeeService.getEmployeeInfo();
  this._employeeService = employeeService;
  this.showCreateTimeCard = false;
  this.newTimeCard = {
    Approved: false,
    Date: '',
    TimeIn: '',
    TimeOut: '',
  };
  this._employeeID = 'aEcYJmejgnjuYe8d4ukx';
   }

  submitTimeCard() {
    this._employeeService.createNewTimeCardByEmployeeID(this._employeeID, this.newTimeCard);
    this.showCreateTimeCard = false;
    this.newTimeCard.Date = '';
    this.newTimeCard.TimeIn = '';
    this.newTimeCard.TimeOut = '';

  }

  showCreateTimeCardContainer() {
    this.showCreateTimeCard = true;
  }
  ngOnInit() {
       // tslint:disable-next-line:no-trailing-whitespace
    console.log(this.employee);
  }

}
