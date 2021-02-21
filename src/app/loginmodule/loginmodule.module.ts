import { NgModule, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginmoduleRoutingModule } from './loginmodule-routing.module';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MyloginComponent } from './mylogin/mylogin.component';
import { TransactionmoduleRoutingModule } from '../transactionmodule/transactionmodule-routing.module';

@NgModule({
  declarations: [ MainComponent, MyloginComponent],
  imports: [
    CommonModule,
    LoginmoduleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,   
    MatButtonModule,
    TransactionmoduleRoutingModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class LoginmoduleModule { }
