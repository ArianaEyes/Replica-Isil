export interface Empleado {
  empleadoID: number;
  name?: string | null;
  paternal_Surname?: string | null;
  maternal_Surname?: string | null;
  old?: number | null;
  cargo?: string | null;
  sueldo?: number | null;
  fecha_Contratacion?: string | null;
  email: string;
  password: string;
  dni: string;
}
