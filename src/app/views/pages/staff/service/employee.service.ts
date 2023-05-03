import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employees.interface';
import { v4 as uuid } from 'uuid';


@Injectable({providedIn: 'root'})
export class EmployeeService {


  public employees: Employee[] = [
  {
    id: uuid(),
    name: 'Oskar',
    age: 30,
    rol: 'Contabilidad'
  },
  {
    id: uuid(),
    name: 'OmAr',
    age: 28,
    rol: 'R.H.'
  },
  {
    id: uuid(),
    name: 'AlexaNDra',
    age: 27,
    rol: 'Compras'
  },
  {
    id: uuid(),
    name: 'marIa',
    age: 51,
    rol: 'Finanzas'
  },
  {
    id: uuid(),
    name: 'daniEla',
    age: 26,
    rol: 'Contabilidad'
  },
  {
    id: uuid(),
    name: 'FerNANDo',
    age: 26,
    rol: 'R.H.'
  },
  {
    id: uuid(),
    name: 'Robeto',
    age: 65,
    rol: 'Compras'
  },
  {
    id: uuid(),
    name: 'MiChel',
    age: 34,
    rol: 'R.H.'
  },
  {
    id: uuid(),
    name: 'AbraHam',
    age: 44,
    rol: 'Contabilidad'
  },
  {
    id: uuid(),
    name: 'LeoPOLDo',
    age: 45,
    rol: 'Sistemas'
  },
  {
    id: uuid(),
    name: 'SusanA',
    age: 31,
    rol: 'Compras'
  }];


  deleteEmployeeById (id:string) {
    this.employees = this.employees.filter ( employee => employee.id !== id );
  }

}
