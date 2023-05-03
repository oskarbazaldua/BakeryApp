import { Component } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import { Employee } from './interfaces/employees.interface';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styles: [
  ]
})
export class StaffComponent {

  constructor(public employeeService: EmployeeService) {}

  get employee(): Employee[] {
    return [...this.employeeService.employees];
  }



  onDeletEmployee( id: string ):void {
    this.employeeService.deleteEmployeeById ( id );
  }


}



