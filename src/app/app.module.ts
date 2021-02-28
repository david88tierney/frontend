import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

// OTHER ROUTES 
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardPmComponent } from './board-pm/board-pm.component';

// Auth Guards
import { authInterceptorProviders } from './_helpers/auth.interceptor';


// Employees Need to update and make cleaner
import { AddEmployeeComponent } from './pmo_view/employees/add-employee/add-employee.component';
import { DetailsEmployeeComponent } from './pmo_view/employees/details-employee/details-employee.component';
import { EmployeesComponent } from './pmo_view/employees/employees.component';
import { AddEmployeesToContractComponent } from './pmo_view/add-employees-to-contract/add-employees-to-contract.component';

// Assets
import { AssetsComponent } from './pmo_view/assets/assets.component';
import { DetailsComponent } from './pmo_view/assets/details/details.component';

import { AddComponent } from './pmo_view/assets/add/add.component';

// Contracts
import { ContractsComponent } from './pmo_view/contracts/contracts.component';
import { AddContractComponent } from './pmo_view/contracts/add-contract/add-contract.component';
import { DetailsContractComponent } from './pmo_view/contracts/details-contract/details-contract.component';
import { NotesComponent } from './pmo_view/contracts/notes/notes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardPmComponent,
    AddEmployeeComponent,
    AssetsComponent,
    DetailsComponent,
    AddComponent,
    ContractsComponent,
    AddContractComponent,
    EmployeesComponent,
    DetailsContractComponent,
    DetailsEmployeeComponent,
    NotesComponent,
    AddEmployeesToContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
