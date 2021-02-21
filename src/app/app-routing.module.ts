import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginmoduleModule } from './loginmodule/loginmodule.module';
import { TransactionmoduleModule } from './transactionmodule/transactionmodule.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginmodule',
    pathMatch: 'full'
  },
 
  {
    path: "loginmodule",
    loadChildren: "./loginmodule/loginmodule.module#LoginmoduleModule",
  },
  {
    path: "transactionmodule",
    loadChildren: "./transactionmodule/transactionmodule.module#TransactionmoduleModule",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
