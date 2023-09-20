import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Employees } from './db-data';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeService } from './services/employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  e1$: Observable<Employee[]>;
  @ViewChildren(EmployeeCardComponent, { read: ElementRef })
  empCard: QueryList<EmployeeCardComponent>;
  // constructor(private httpClient: HttpClient) {}
  // ngOnInit() {
  //   this.httpClient.get('../assets/employee.json').subscribe((data) => {
  //     console.log(data);
  //     this.e2 = data;
  //   });
  // }

  constructor(private empService: EmployeeService) {}
  ngOnInit() {
    this.e1$ = this.empService.loadEmployees();
  }
  selectedEmpDetails(e: Employee) {
    console.log(e.firstname);
  }
  ngAfterViewInit() {
    console.log(this.empCard);
  }

  toggle(highlighted: boolean) {
    console.log(highlighted);
  }
}
