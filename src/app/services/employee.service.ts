import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeRequestDto } from '../models/employee.request.dto';

@Injectable()
export class EmployeeService {

  private BASE_URL = 'https://localhost:7079/api/employee';

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    const url = `${this.BASE_URL}`;
    return this.http.get<Employee[]>(url);
  }

  createEmployee(request: EmployeeRequestDto): Observable<Employee> {
    const url = `${this.BASE_URL}`;
    return this.http.post<Employee>(url, request);
  }

  updateEmployee(request: EmployeeRequestDto, id: number): Observable<void> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.put<void>(url, request);
  }

  deleteEmployee(id: number): Observable<void> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.delete<void>(url);
  }
}

