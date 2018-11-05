import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../../models/employee';
import {EmployeeService} from '../../../service/employee/employee.service';
import {PaginationService} from '../../../service/pagination/pagination.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  currentPage = 1;
  pagesToPagination: number [];
  totalPages: number;
  totalElements: number;

  constructor(private employeeService: EmployeeService,
              private paginationService: PaginationService) {
  }

  ngOnInit() {
    this.getEmployeesByPage();
  }

  getEmployeesByPage(): void {
    this.employeeService.getEmployeesByPage(this.currentPage - 1).subscribe(data => {
      this.employees = data['content'];
      this.totalPages = data['totalPages'];
      this.totalElements = data['totalElements'];
      this.pagesToPagination = this.paginationService.calculatePages(this.currentPage, this.totalPages);
    });
  }

  goToPage(n: number): void {
    this.currentPage = n;
    this.getEmployeesByPage();
  }

  onFirst(n: number): void {
    this.currentPage = n;
    this.getEmployeesByPage();
  }

  onPrev(): void {
    this.currentPage--;
    this.getEmployeesByPage();
  }

  onNext(): void {
    this.currentPage++;
    this.getEmployeesByPage();
  }

  onLast(n: number): void {
    this.currentPage = n;
    this.getEmployeesByPage();
  }
}
