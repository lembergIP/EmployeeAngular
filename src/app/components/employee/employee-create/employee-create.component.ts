import {Component, OnInit} from '@angular/core';
import {Department} from '../../../models/department';
import {EmployeeService} from '../../../service/employee/employee.service';
import {DepartmentService} from '../../../service/department/department.service';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {Employee} from '../../../models/employee';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee;
  departments: Department[] = [];
  selectDepartment: string;
  formValid = true;

  constructor(private empService: EmployeeService,
              private depService: DepartmentService,
              private router: Router) {
  }

  ngOnInit() {
    this.getDepartments();
    this.employee = new Employee();
  }

  getDepartments() {
    this.depService.getDepartments().subscribe(dep => {
      this.departments = dep;
      this.selectDepartment = dep[0].name;
    });
  }

  onSubmit() {
    this.router.navigate(['/employee']);
  }

  createEmployee(createEmployeeForm: FormGroup) {
    if (createEmployeeForm.valid) {
      if (!this.employee.active) {
        this.employee.active = false;
      }
      this.employee.departmentName = this.selectDepartment;
      this.empService.createEmployee(this.employee).subscribe(res => {
        alert('Employee created successful!');
        this.onSubmit();
      });
    } else {
      this.formValid = false;
    }
  }

  changeDepartment(dep: string) {
    this.selectDepartment = dep;
  }
}
