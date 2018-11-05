import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../models/employee';
import {EmployeeService} from '../../../service/employee/employee.service';
import {ActivatedRoute} from '@angular/router';
import {PaginationService} from '../../../service/pagination/pagination.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

  employees: Employee[];
  currentPage = 1;
  pagesToPagination: number [];
  totalPages: number;
  totalElements: number;
  searchName: string;

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private paginationService: PaginationService) {
  }

  ngOnInit() {
    this.employees;
    this.foundEmployeesList();
  }

  searchEmployee(searchEmployeeForm: FormGroup): void {
    if (this.route.snapshot.paramMap.has('name')) {
      this.searchName = this.route.snapshot.paramMap.get('name');
    }
    console.log('search name : ' + this.searchName);
    this.foundEmployeesList();
  }

  foundEmployeesList() {
    console.log('foundEmployeesList : ' + this.searchName);
    this.employeeService.searchEmployeesByName(this.searchName, this.currentPage - 1).subscribe(data => {
      this.employees = data['content'];
      this.totalPages = data['totalPages'];
      this.totalElements = data['totalElements'];
      this.pagesToPagination = this.paginationService.calculatePages(this.currentPage, this.totalPages);
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id);
    alert('Employee deleted');
    this.foundEmployeesList();
  }

  goToPage(n: number): void {
    this.currentPage = n;
    this.foundEmployeesList();
  }

  onFirst(n: number): void {
    this.currentPage = n;
    this.foundEmployeesList();
  }

  onPrev(): void {
    this.currentPage--;
    this.foundEmployeesList();
  }

  onNext(): void {
    this.currentPage++;
    this.foundEmployeesList();
  }

  onLast(n: number): void {
    this.currentPage = n;
    this.foundEmployeesList();
  }
}
