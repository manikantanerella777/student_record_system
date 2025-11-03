import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private API = `${environment.apiUrl}/students`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.API);
  }

  getById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.API}/${id}`);
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.API, student);
  }

  update(id: string, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.API}/${id}`, student);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }
}
