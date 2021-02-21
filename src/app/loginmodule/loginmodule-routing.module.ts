import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MyloginComponent } from './mylogin/mylogin.component';

const routes: Routes = [
  { path: '', redirectTo: 'mylogin', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'mylogin',component: MyloginComponent}
];

@NgModule({
  imports: [    
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,  
    MatIconModule,
    FormsModule,
    MatCardModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginmoduleRoutingModule { }
