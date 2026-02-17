import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-isil-net',
  imports: [RouterModule, CommonModule],
  templateUrl: './isil-net.html',
  styleUrl: './isil-net.css',
})
export class IsilNet {
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
    event.preventDefault();
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
}
