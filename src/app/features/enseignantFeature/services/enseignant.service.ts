import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnseignantService {
  private apiUrl = 'http://localhost:8081/api/v1/gestion-examens/enseignant';

  constructor(private http: HttpClient) {}

  addEnseignant(enseignant: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, enseignant);
  }

  getAllEnseignants(): Observable<any> {
    return this.http.get(`${this.apiUrl}/findAll`);
  }

  deleteEnseignant(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteById/${id}`);
  }
}
