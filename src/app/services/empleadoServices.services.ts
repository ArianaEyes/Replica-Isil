import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado.model'; // crea un modelo si quieres tipado

@Injectable({ providedIn: 'root' })
export class EmpleadoService {
  private apiUrl = 'http://localhost:3000/empleados'; // URL de tu API Java

  constructor(private http: HttpClient) {}

  // Obtener todos los empleados
  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl);
  }

  // Crear un empleado
  crearEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiUrl, empleado);
  }

  // Actualizar un empleado
  actualizarEmpleado(id: number, empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.apiUrl}/${id}`, empleado);
  }

  // Eliminar un empleado
  eliminarEmpleado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
