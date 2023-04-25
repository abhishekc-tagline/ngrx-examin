import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllStudents, StudentDetails } from '../interfaces/teacher';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  httpHeaders = {
    headers: new HttpHeaders({
      'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpdnlhZy50YWdsaW5lK3RlYWNoZXJAZ21haWwuY29tIiwiX2lkIjoiNjNlZGQ5MGQ3NDk0YWMwMDQwMTc3MWNjIiwiaWF0IjoxNjgxOTAxNzc2LCJleHAiOjE2ODE5MDUzNzZ9.YjAhM861Sxfd3UYahCIWLovoFGIwmOLgNk8k7itYngk'
    })
  }
  private teacherURL = `${environment.baseURL}dashboard/Teachers`
  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<AllStudents> {
    return this.http.get<AllStudents>(this.teacherURL, this.httpHeaders);
  }

  getStudentById(id: string): Observable<StudentDetails> {
    return this.http.get<StudentDetails>(`${this.teacherURL}/viewStudentDetail?id=${id}`, this.httpHeaders);
  }
}
