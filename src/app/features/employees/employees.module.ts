import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './components/employees/employees.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { EmployeesRoutingModule } from './employees.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ChargesService } from '../../services/charges.service';



@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    EmployeeService,
    ChargesService
  ],
})
export class EmployeesModule { }
