import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Charge } from '../../../../models/charge';
import { EmployeeService } from '../../../../services/employee.service';
import { Employee } from '../../../../models/employee';
import { EmployeeRequestDto } from '../../../../models/employee.request.dto';
import { ChargesService } from '../../../../services/charges.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent {
  employeeForm!: FormGroup;

  roles: Charge[] = [];

  constructor(
    private readonly dialogRef: MatDialogRef<EmployeeFormComponent>,
    private readonly employeeService: EmployeeService,
    private readonly chargesService: ChargesService,
    @Inject(MAT_DIALOG_DATA) public data: Employee
  ) {}

  ngOnInit() {
    this.getRoles();
    this.createForm();
    this.setEmployee();
  }

  getRoles() {
    this.chargesService.getCharges()
      .subscribe(response => {
        this.roles = response;
      });
  }

  createForm() {
    this.employeeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      hiredate: new FormControl('', [Validators.required]),
      afp: new FormControl('', Validators.required),
      chargeId: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
    });
  }

  setEmployee() {
    if (this.data) {
      console.log(this.data);
      this.employeeForm.patchValue({
        name: this.data.name,
        lastname: this.data.lastname,
        birthdate: this.data.birthdate,
        hiredate: this.data.hiredate,
        afp: this.data.afp,
        chargeId: this.data.charge.id,
        salary: this.data.salary
      })
    }
  }

  save() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }
    
    const request: EmployeeRequestDto = {
      name: this.employeeForm.value.name,
      lastname: this.employeeForm.value.lastname,
      afp: this.employeeForm.value.afp,
      birthdate: this.employeeForm.value.birthdate,
      chargeId: this.employeeForm.value.chargeId,
      hiredate: this.employeeForm.value.hiredate,
      salary: this.employeeForm.value.salary
    }
    console.log('Formulario válido:', request);

    if (this.data) {
      this.employeeService.updateEmployee(request, this.data.id)
        .subscribe(() =>{
          this.dialogRef.close(true);
        })
    } else {
      this.employeeService.createEmployee(request)
        .subscribe(() => {
          this.dialogRef.close(true);
        })
    }


  } 
}
