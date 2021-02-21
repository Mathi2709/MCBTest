import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionmoduleRoutingModule } from './transactionmodule-routing.module';
import { NewtransactionComponent } from './newtransaction/newtransaction.component';
import { SubmitedtransactionComponent } from './submitedtransaction/submitedtransaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumbersOnly, TextOnly } from '../mydirective.directive';
import { Text } from '@angular/compiler/src/render3/r3_ast';


@NgModule({
  declarations: [NewtransactionComponent, SubmitedtransactionComponent],
  imports: [
    CommonModule,
    TransactionmoduleRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
  ]
})
export class TransactionmoduleModule { }
