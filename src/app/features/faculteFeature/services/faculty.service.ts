import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private apiUrl = 'http://localhost:3000/faculties'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  // Récupérer toutes les facultés
  getAllFaculties(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Récupérer une faculté par ID
  getFacultyById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Ajouter une nouvelle faculté
  addFaculty(faculty: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, faculty);
  }

  // Modifier une faculté existante
  updateFaculty(id: number, faculty: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, faculty);
  }

  // Supprimer une faculté
  deleteFaculty(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
