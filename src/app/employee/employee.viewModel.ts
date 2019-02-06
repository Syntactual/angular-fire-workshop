import { Observable } from 'rxjs';

export class EmployeeViewModel {
    id: string;
    FirstName: string;
    LastName: string;
    TimeCards$: Observable<TimeCard[]>;
}

export interface TimeCard {
    id: string;
    Date: string;
    TimeIn: string;
    TimeOut: string;
    Approved: boolean;
}

export interface Employee {
    id: string;
    FirstName: string;
    LastName: string;
}
