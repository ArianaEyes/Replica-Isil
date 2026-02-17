import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { PersonaServices } from '../../services/personaServices.services';
import { Persona } from '../../models/persona.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  formulario: FormGroup;
  personas = signal<Persona[]>([]);

  private PersonaServices = inject(PersonaServices);

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.cargaPersonas();
  }

  cargo: string = '';
  nombre: string = '';
  apellido: string = '';
  id: number = 0;

  onSubmit() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const { email, password } = this.formulario.value;

    const usuario = this.personas().find((e) => {
      console.log('Comparando:', e.email, e.password, 'con', email, password);
      if (e.email === email && e.password === password) {
        this.id = e.id!;
        this.cargo = e.cargo!;
        this.nombre = e.nombre!;
        this.apellido = e.apellido!;
        return true;
      }
      return false;
    });

    if (usuario) {
      Swal.fire('¡Éxito!', `Bienvenido ${usuario.nombre}`, 'success');
      localStorage.setItem('email', usuario.email);
      localStorage.setItem('cargo', this.cargo);
      localStorage.setItem('nombre', this.nombre);
      localStorage.setItem('apellido', this.apellido);
      localStorage.setItem('id', String(this.id));
      if (this.cargo === 'Alumno') {
        this.router.navigate(['/home']);
      } else if (this.cargo === 'Profesor') {
        this.router.navigate(['/home-teacher']);
      }
    } else {
      Swal.fire('Error', 'Email o contraseña incorrectos', 'error');
    }
  }

  crearUsuario() {
    this.router.navigate(['/new-usuario']);
  }

  cargaPersonas() {
    this.PersonaServices.getPersonas().subscribe({
      next: (data: Persona[]) => {
        console.log('Datos recibidos desde API:', data);
        this.personas.set(data);
      },
      error: (err) => {
        console.error('Error al ingresar persona', err);
        Swal.fire('Error', 'No se pudo ingresar :c ' + err.error, 'error');
      },
    });
  }
}
