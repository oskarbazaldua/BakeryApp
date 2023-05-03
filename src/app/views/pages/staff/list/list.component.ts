import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../interfaces/employees.interface';

@Component({
  selector: 'employee-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {

  @Input()
  public employeeList: Employee[] = [{
    name: '',
    age: 0,
    rol: ''
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeletEmployee(id?: string): void {
    //si el id no existe ! no envia nada
    if (!id) return;

    this.onDelete.emit( id );
  }

}
