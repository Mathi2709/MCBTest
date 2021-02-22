import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-submitedtransaction',
  templateUrl: './submitedtransaction.component.html',
  styleUrls: ['./submitedtransaction.component.css']
})
export class SubmitedtransactionComponent implements OnInit {

  userDetails: any=[];

  constructor(
    public router:Router,
    public httpservice:HttpService,

  ) { }

  ngOnInit() {    
    this.getSubmitedTransaction();
  }

  onClickval(){
    this.router.navigate(['loginmodule/mylogin']);
  }

  onClickBack(){
    this.router.navigate(['loginmodule/main']);
  }

  getSubmitedTransaction(){
    var sumbmitedtransactionUrl = this.httpservice.baseUrl + this.httpservice.newTransaction;
    this.httpservice.ajaxCallService(sumbmitedtransactionUrl,'get','').subscribe(response =>{  
  if(response.length > 0){
    this.userDetails = response;
  }  
    })
  }

}
