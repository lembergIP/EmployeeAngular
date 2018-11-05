import {Component, OnInit} from '@angular/core';
import {Department} from '../../../models/department';
import {Employee} from '../../../models/employee';
import {EmployeeService} from '../../../service/employee/employee.service';
import {DepartmentService} from '../../../service/department/department.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee: Employee;
  departments: Department[] = [];
  selectDepartment: string;
  formValid = true;

  constructor(private empService: EmployeeService,
              private depService: DepartmentService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.getDepartments();
    this.getEmployee();
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

  updateEmployee(updateEmployeeForm: FormGroup) {
    if (updateEmployeeForm.valid) {
      if (!this.employee.active) {
        this.employee.active = false;
      }
      this.employee.departmentName = this.selectDepartment;
      console.log('con_name :' + this.employee.departmentName);
      this.empService.editEmployee(this.employee).subscribe(res => {
        alert('Employee updated successful!');
        this.onSubmit();
      });
    } else {
      this.formValid = false;
    }
  }

  changeDepartment(dep: string) {
    this.selectDepartment = dep;
  }

  goBack() {
    this.location.back();
  }

  getEmployee() {
    const empId = +this.route.snapshot.paramMap.get('id');
    this.empService.getEmployeeById(empId).subscribe(emp => this.employee = emp);
  }
}
