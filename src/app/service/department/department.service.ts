import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../../models/employee';
import {Department} from '../../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private depUrl = 'api/department';

  constructor(private http: HttpClient) { }

  getDepartments() {
    return this.http.get<Department[]>(`${this.depUrl}`);
  }
}
