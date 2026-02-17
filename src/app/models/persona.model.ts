export interface Persona {
  id: number;
  nombre?: string | null;
  apellido?: string | null;
  fecha_registro?: string | null;
  fecha_nacimiento?: string | null;
  email: string;
  password: string;
  cargo?: string;
}
