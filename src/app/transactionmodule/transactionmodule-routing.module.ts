import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NewtransactionComponent } from './newtransaction/newtransaction.component';
import { SubmitedtransactionComponent } from './submitedtransaction/submitedtransaction.component';

const routes: Routes = [
  { path: 'newtransaction', component: NewtransactionComponent },
  { path: 'submitedtransaction', component: SubmitedtransactionComponent },
];

@NgModule({
  imports: [
    // CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionmoduleRoutingModule { }
