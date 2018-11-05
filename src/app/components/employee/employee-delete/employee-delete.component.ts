import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../../../service/employee/employee.service';
import {Employee} from '../../../models/employee';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  @Input() employee: Employee;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.deleteEmployee();
  }
  onSubmit() {
    this.router.navigate(['/employee']);
  }
  deleteEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.deleteEmployee(id).subscribe(res => {
      alert('Employee deleted');
      this.onSubmit();
    });
    this.onSubmit();
  }
}
