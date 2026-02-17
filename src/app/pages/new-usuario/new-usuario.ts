import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-usuario.html',
  styleUrl: './new-usuario.css',
})
export class NewUsuario {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      cargo: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    function generarDniAleatorio(): string {
      return Math.floor(Math.random() * 90000000 + 10000000).toString();
    }
    const fecha_registro = new Date().toISOString;

    const nuevoPersona = {
      ...this.formulario.value,
      dni: generarDniAleatorio(),
      fecha_registro,
    };
    console.log('Datos enviados al backend:', nuevoPersona);

    this.http
      .post('http://localhost:3000/isilmas/personas', nuevoPersona, { responseType: 'text' })
      .subscribe({
        next: (res) => {
          console.log('Empleado creado:', res);
          Swal.fire('¡Éxito!', 'Usuario creado correctamente', 'success');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Error al crear empleado:', err);
          Swal.fire('Error', 'No se pudo crear el usuario: ' + err.error, 'error');
        },
      });
  }
}
