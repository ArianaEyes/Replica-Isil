import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [UpperCasePipe, RouterModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
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
}
