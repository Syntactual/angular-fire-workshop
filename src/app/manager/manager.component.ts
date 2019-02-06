import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { EmployeeViewModel } from '../employee/employee.viewModel';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  readonly _employeeService: EmployeeService;
  employee: EmployeeViewModel;
  constructor(employeeService: EmployeeService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/thumbs-up.svg'));
    this._employeeService = employeeService;
    this.employee = employeeService.getEmployeeInfo();
  }

  approveTimeCard(timeCardId: string) {
    this._employeeService.updateApproveToTrueByDocId(this.employee.id, timeCardId);
  }

  ngOnInit() {
  }

}
