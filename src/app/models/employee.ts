import { Charge } from "./charge";

export interface Employee {
  id: number;
  name: string;
  lastname: string;
  birthdate: Date;
  afp: string;
  charge: Charge;
  hiredate: Date;
  salary: number;
}