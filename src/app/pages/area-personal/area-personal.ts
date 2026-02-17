import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-area-personal',
  imports: [UpperCasePipe, RouterModule],
  templateUrl: './area-personal.html',
  styleUrl: './area-personal.css',
})
export class AreaPersonal {
  isOpen = false;
  email = localStorage.getItem('email');
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

  nombreUsuario = 'eve.holt@reqres.in';

  tareaJ = [
    {
      fecha: 'jueves,18 de septiembre de 2025',
      hora: '23:59',
      curso: '3072.202520 - PROGRAMACION AVANZADA DE BASE DE DATOS (SRM)',
      tarea: true,
    },
  ];
  tareaV = [
    {
      hora: '23:59',
      curso: '3586.202520 - SOLUCIONES BASADAS EN INTERNET DE LAS COSAS (SRM)',
      tarea: true,
    },
    {
      hora: '23:59',
      curso: '1451.202520 - COMUNICACION ESCRITA (SRM)',
      tarea: false,
    },
    {
      hora: '23:59',
      curso: '4761.202520 - DESARROLLO DE APLICACIONES MOVILES (SRM)',
      tarea: true,
    },
  ];

  tareaS = [
    {
      hora: '23:59',
      curso: '5218.202520 - CALCULO PARA CIENCIAS E INGENIERIA (SRM)',
      tarea: false,
    },
  ];
}
