import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DialogService } from '../../../../core/services/dialog.service';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../../services/employee.service';
import { Employee } from '../../../../models/employee';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
})
export class EmployeesComponent {

  // dataSource!: MatTableDataSource<Employee>;
  dataSource = new MatTableDataSource<Employee>();
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20];
  currentPage = 0;
  totalData = 0;
  employeeList: any = [];
  displayedColumns: string[] = [
    'fullName',
    'afp',
    'charge',
    'hiredate',
    'birthdate',
    'salary',
    'actions'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly router: Router,
    private dialog: MatDialog,
    private readonly dialogService: DialogService
  ) {}

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.employeeList = [];
    this.employeeService.getEmployee().subscribe((response: Employee[]) => {
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
    });
  }

  openEmployeeModal(): void {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '600px',
      height: 'auto',
      maxWidth: '90vw',
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Nuevo empleado registrado:', result);
        this.getEmployee();
      }
    });
  }

  onDelete(employee: any) {
    this.dialogService
      .confirmationModal('¿Desea eliminar el registro?')
      .afterClosed()
      .subscribe((response: boolean) => {
        if (response) {
          this.employeeService.deleteEmployee(employee.id).subscribe(() => {
            this.getEmployee();
          });
        }
      });
  }

  onEdit(employee: Employee) {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '600px',
      height: 'auto',
      maxWidth: '90vw',
      data: employee
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Empleado actualizado:', result);
        this.getEmployee();
      }
    });

  }

}
