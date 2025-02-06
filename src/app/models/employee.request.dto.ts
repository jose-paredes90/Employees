import { Charge } from "./charge";

export interface EmployeeRequestDto {
  name: string;
  lastname: string;
  birthdate: Date;
  afp: string;
  chargeId: number;
  hiredate: Date;
  salary: number;
}