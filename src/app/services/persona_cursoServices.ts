import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona_Curso } from '../models/Persona_Curso';

@Injectable({ providedIn: 'root' })
export class Persona_CursoServices {
  private apiUrl = 'http://localhost:3000/isilmas/personas-cursos'; // URL de tu API Java

  constructor(private http: HttpClient) {}

  // Obtener todos los empleados
  getPersona_Curso(): Observable<Persona_Curso[]> {
    return this.http.get<Persona_Curso[]>(this.apiUrl);
  }

  // Crear un empleado
  crearPersona_Curso(Persona_Curso: Persona_Curso): Observable<Persona_Curso> {
    return this.http.post<Persona_Curso>(this.apiUrl, Persona_Curso);
  }

  // Actualizar un empleado

  // Eliminar un empleado
}
