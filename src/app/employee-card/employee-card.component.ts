import {
  Component,
  EventEmitter,
  Input,
  Output,
  AfterViewInit,
  ContentChild,
  ElementRef,
  ViewChildren,
} from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeImageComponent } from '../employee-image/employee-image.component';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent implements AfterViewInit {
  @Input({ required: true }) employee: Employee;

  @Output() employeeSelected = new EventEmitter<Employee>();
  @ContentChild(EmployeeImageComponent, { read: ElementRef })
  ele: EmployeeImageComponent;
  dateformat: string;
  ngOnInit(): void {
    this.getdate();
  }
  edit() {
    this.employeeSelected.emit(this.employee);
  }
  getCategory() {
    return this.employee.category == 'IT';
  }
  getdate() {
    var date = new Date(this.employee.birthdate);
    this.dateformat =
      date.getDate() +
      ' ' +
      new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date) +
      ' ' +
      date.getFullYear();
  }
  ngAfterViewInit() {
    console.log(this.ele);
  }
}
