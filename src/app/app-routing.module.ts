import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Open Routes to All
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
// Other Content
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardPmComponent } from './board-pm/board-pm.component';
// Employees
import { EmployeesComponent } from './pmo_view/employees/employees.component';
import { DetailsEmployeeComponent } from './pmo_view/employees/details-employee/details-employee.component';
import { AddEmployeeComponent } from './pmo_view/employees/add-employee/add-employee.component';
// Assets
import { AssetsComponent } from './pmo_view/assets/assets.component';
import { AddComponent } from './pmo_view/assets/add/add.component';
import { DetailsComponent } from './pmo_view/assets/details/details.component';
// Contracts
import { ContractsComponent } from './pmo_view/contracts/contracts.component';
import { AddContractComponent } from './pmo_view/contracts/add-contract/add-contract.component';
import { DetailsContractComponent } from './pmo_view/contracts/details-contract/details-contract.component';
import { NotesComponent } from './pmo_view/contracts/notes/notes.component';

import { AddEmployeesToContractComponent } from './pmo_view/add-employees-to-contract/add-employees-to-contract.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  // Assets
  { path: 'assets', component: AssetsComponent},
  { path: 'assets/addAsset', component: AddComponent },
  { path: 'assets/:id', component: DetailsComponent },
  // Contracts
  { path: 'contracts', component: ContractsComponent},
  { path: 'contracts/addContract', component: AddContractComponent},
  { path: 'contracts/:id', component: DetailsContractComponent},
  { path: 'contracts/notes/:id' , component: NotesComponent},
  // Employees
  { path: 'employees', component: EmployeesComponent},
  { path: 'employees/addEmployee', component: AddEmployeeComponent},
  { path: 'employees/:id', component: DetailsEmployeeComponent},
  { path: 'test', component: AddEmployeesToContractComponent},

  // Can get rid of 
  { path: 'pmo/addEmployee' , component: AddEmployeeComponent},




  { path: 'pm', component: BoardPmComponent },
  { path: 'admin', component: BoardAdminComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
