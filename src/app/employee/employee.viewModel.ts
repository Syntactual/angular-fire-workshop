import { Observable } from 'rxjs';

export class EmployeeViewModel {
    FirstName: string;
    LastName: string;
    TimeCards$: Observable<TimeCard[]>;
}

export interface TimeCard {
    Date: string;
    TimeIn: string;
    TimeOut: string;
    Approved: boolean;
}

export interface Employee {
    FirstName: string;
    LastName: string;
}
