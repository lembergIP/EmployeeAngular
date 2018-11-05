import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Employee} from '../../models/employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeUrl = 'api/employee';


  constructor(private http: HttpClient) {
  }

  getEmployeesByPage(page: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.employeeUrl}?page=${page}`);
  }

  getEmployeeById(id: number) {
    return this.http.get<Employee>(`${this.employeeUrl}/${id}`);
  }

  deleteEmployee(id: number) {
    const url = `${this.employeeUrl}/${id}`;
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete(url, httpOption);

  }

  editEmployee(employee: Employee) {
    return this.http.put(`${this.employeeUrl}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'
    });
  }

  createEmployee(emplCreate: Employee) {
    return this.http.post(this.employeeUrl, emplCreate, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'
    });
  }

  searchEmployeesByName(name: string, page: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.employeeUrl}/search?name=${name}&page=${page}`);
  }
}
