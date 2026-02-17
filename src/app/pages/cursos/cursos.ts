import { UpperCasePipe } from '@angular/common';
import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Persona_Curso } from '../../models/Persona_Curso';
import { Curso } from '../../models/cursos';
import { Persona_CursoServices } from '../../services/persona_cursoServices';
import { CursoServices } from '../../services/CursoServices';
@Component({
  selector: 'app-cursos',
  imports: [UpperCasePipe, RouterModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})
export class Cursos implements OnInit {
  isOpen = false;
  email = localStorage.getItem('email');
  curso_persona = signal<Persona_Curso[]>([]);
  curso = signal<Curso[]>([]);
  cargo = localStorage.getItem('cargo');
  nombre = localStorage.getItem('nombre');
  apellido = localStorage.getItem('apellido');
  id = Number(localStorage.getItem('id'));

  toggleDropdown(event: Event) {
    event.preventDefault(); // evita refrescar la página
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  isOpenToo = false;

  toggleDropdownToo(event: Event) {
    event.preventDefault(); // evita refrescar la página
    this.isOpenToo = !this.isOpenToo;
  }

  closeDropdownToo() {
    this.isOpenToo = false;
  }

  isUser = false;

  toogleUser(event: Event) {
    event.preventDefault(); // evita refrescar la página
    this.isUser = !this.isUser;
  }

  closerToogleUser() {
    this.isUser = false;
  }



  cursos = false;

  toogleCursos() {
    this.cursos = !this.cursos;
  }

  ordenar = false;

  OrdenarToogle() {
    this.ordenar = !this.ordenar;
  }

  tarjeta = false;

  TarjetaToogle() {
    this.tarjeta = !this.tarjeta;
  }

  descripcion = false;

  DescripcionToogle() {
    this.descripcion = !this.descripcion;
  }

  ngOnInit(): void {
    this.cargaCurso_Persona();
    this.cargaCursos();
  }
  private Persona_CursoServices = inject(Persona_CursoServices);
  private Cursos_Services = inject(CursoServices);
  cargaCurso_Persona() {
    this.Persona_CursoServices.getPersona_Curso().subscribe({
      next: (data: Persona_Curso[]) => {
        console.log('Datos recibidos desde la API:', data);
        this.curso_persona.set(data);
      },
      error: (err) => console.error('Error al cargar cursos_personas:', err),
    });
  }

  cursosDePersona = computed(() => {
    return this.curso_persona()
      .filter((cp) => cp.id_persona === this.id)
      .map((cp) => cp.id_curso);
    //[1,2,3,4]
  });

  logCursosEffect = effect(() => {
    console.log('Cursos de la persona:', this.cursosDePersona());
  });

  cargaCursos() {
    this.Cursos_Services.getCurso().subscribe({
      next: (data: Curso[]) => {
        console.log('Datos recibidos desde la API:', data);
        this.curso.set(data);
      },
      error: (err) => console.error('Error al cargar los cursos:', err),
    });
  }

  datos_curso_obtenidos = computed(() => {
    const ids = this.cursosDePersona();
    return this.curso().filter((c) => ids.includes(c.id));
  });
  guardarDatos() {
    localStorage.setItem('datos_cursos', String(this.datos_curso_obtenidos));
  }
}
