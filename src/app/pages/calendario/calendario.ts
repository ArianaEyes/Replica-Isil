import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-calendario',
  imports: [UpperCasePipe, RouterModule],
  templateUrl: './calendario.html',
  styleUrl: './calendario.css',
})
export class Calendario {
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
    event.preventDefault();
    this.isUser = !this.isUser;
  }

  closerToogleUser() {
    this.isUser = false;
  }

  nombreUsuario = 'eve.holt@reqres.in';

  cursos = false;

  toogleCursos() {
    this.cursos = !this.cursos;
  }
}
