import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private apiUrl = 'http://localhost:8081/api/v1/gestion-examens/departments'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  // Récupérer tous les départements
  getAllDepartments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Supprimer un département
  deleteDepartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Ajouter un nouveau département
  addDepartment(department: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, department);
  }

  // Modifier un département existant
  updateDepartment(id: number, department: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, department);
  }}
