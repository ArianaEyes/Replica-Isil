import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/cursos';

@Injectable({ providedIn: 'root' })
export class CursoServices {
  private apiUrl = 'http://localhost:3000/isilmas/cursos'; // URL de tu API Java

  constructor(private http: HttpClient) {}

  // Obtener todos los empleados
  getCurso(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl);
  }

  // Crear un empleado
  crearCurso(Persona_Curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.apiUrl, Persona_Curso);
  }

  // Actualizar un empleado

  // Eliminar un empleado
}
