import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';

@Injectable({ providedIn: 'root' })
export class PersonaServices {
  private apiUrl = 'http://localhost:3000/isilmas/personas'; // URL de tu API Java

  constructor(private http: HttpClient) {}

  // Obtener todos los empleados
  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }

  // Crear un empleado
  crearPersona(Persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl, Persona);
  }

  // Actualizar un empleado
  actualizarPersona(id: number, Persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.apiUrl}/${id}`, Persona);
  }

  // Eliminar un empleado
  eliminarPersona(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
