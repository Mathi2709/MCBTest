import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  userName:any;

  constructor(
    public router :Router
  ) { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem(("Username"))) != undefined && JSON.parse(localStorage.getItem("Username"))!=""){
      this.userName = JSON.parse(localStorage.getItem(("Username")));
    }    
  }

  routing(type){
    if(type == "new"){
      this.router.navigate(["transactionmodule/newtransaction"]);
    }else{
      this.router.navigate(["transactionmodule/submitedtransaction"]);
    }    
  }

  onClickval(){    
    this.router.navigate(['loginmodule/mylogin']);
  }
 

}
