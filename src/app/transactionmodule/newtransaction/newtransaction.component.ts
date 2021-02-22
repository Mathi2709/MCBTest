import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';


@Component({
  selector: 'app-newtransaction',
  templateUrl: './newtransaction.component.html',
  styleUrls: ['./newtransaction.component.css']
})
export class NewtransactionComponent implements OnInit {

  userName: any;
  showmsg:boolean ;
  showmsg1:boolean ;
  public bankTranasctionFrm: FormGroup;
  refer:any;
  customrnmbr:any;
  custnmbr:any;
  btnSubmit:boolean = false ;
  showmsg2:boolean ;
  showmsg3:boolean ;
  bankDetail: any;

  constructor(
    public router:Router,
    public formbuilder:FormBuilder,
    public httpservice:HttpService,
   

  ) { 
    if(JSON.parse(localStorage.getItem(("Username"))) != undefined && JSON.parse(localStorage.getItem("Username"))!=""){
      this.userName = JSON.parse(localStorage.getItem(("Username")));
    }
    this.getCustomerReferencenumbr();   

  }

  getCustomerReferencenumbr(){  
    let today = new Date();
    var yr=today.getFullYear();var mnth=today.getMonth()+1;var dt=today.getDate();  
    let val = Math.floor(1000 + Math.random() * 9000);
    this.customrnmbr = "CUS" + yr+mnth+ dt+val;
    }

  ngOnInit() {
    this.showmsg = false;
    this.showmsg1 = false;
    this.showmsg2 = false;
    this.showmsg3 = false;
    this.bankTranasctionFrm = this.formbuilder.group({   
      refer:['',[Validators.required]],
      custnmbr: ['', [Validators.required]],
      custname:['', [Validators.required]],
      custaddr:['', [Validators.required]],
      custphnmbr:['',[Validators.required]],
      trnsframnt:['',[Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      curencySelect:['',[Validators.required]],
      benecrybank:['',[Validators.required,Validators.pattern(/^[a-zA-Z]*$/)]],
      benecryacntnumbr:['',[Validators.required]],
      paymnt:['',[Validators.required,Validators.pattern(/^[a-zA-Z]*$/)]],
    });  
    this.bankTranasctionFrm.controls['refer'].setValue(this.customrnmbr);

  }

  myScript(e){
    if(e.key == 3){
      e.preventDefault();
    }
  }
  
  //Mathivathani
  //Method to get customerDetails

  customerNumberonFocus(){ 
    let val =  this.bankTranasctionFrm.value.custnmbr; 
    var custmerDetailsUrl = this.httpservice.baseUrl + this.httpservice.newTransaction;    
    this.httpservice.ajaxCallService(custmerDetailsUrl,'get',this.bankTranasctionFrm.value.custnmbr).subscribe(response =>{  
 console.log(response)
 if(val == ""){
  this.httpservice.toastr.error('No Customer found in your search', '', {
    positionClass: 'toast-top-right', closeButton: true, timeOut: 5000
  });
  this.bankTranasctionFrm.controls['custname'].setValue('');
  this.bankTranasctionFrm.controls['custaddr'].setValue('');
  this.bankTranasctionFrm.controls['custphnmbr'].setValue('');
 }else{
 if(response.length > 0){
   for(let idx in response){
    this.bankTranasctionFrm.controls['custname'].setValue(response[0]['custName']);
    this.bankTranasctionFrm.controls['custaddr'].setValue(response[0]['custaddrs']);
    this.bankTranasctionFrm.controls['custphnmbr'].setValue(response[0]['custPhNo']);
   }
 
}else if(response.length == 0){
  this.bankTranasctionFrm.controls['custname'].setValue('');
  this.bankTranasctionFrm.controls['custaddr'].setValue('');
  this.bankTranasctionFrm.controls['custphnmbr'].setValue('');
}
 }
    })
   
  }

  onKeyPressbank(params: any,type){
    this.bankDetail = type;
    if (params.key === "Backspace" || params.key === "Tab" || params.key === "Tab" || params.key === "Delete" || params.key === "ArrowLeft" || params.key === "ArrowRight" || params.key === "End" || params.key === "Home" || params.key === "Enter" || params.key == "Alt" || params.key == "ArrowUp" || params.key == "ArrowDown" || params.key == "ArrowRight" || params.key == "ArrowLeft") {
      return true;

    } else if (!this.isKeyPressedNumeric1(params)) {
      return false;
    }
  }

  private isKeyPressedNumeric1(event: any): boolean {
    if (this.bankDetail == 'benefcryBankDetails') {
      var inputVal = <HTMLInputElement>document.getElementById("benecrybank");
    } else if(this.bankDetail == "paymentDetails"){
      var inputVal = <HTMLInputElement>document.getElementById("paymnt");
    }
    var input = inputVal.value;
    input = input + event.key;
    if (input.length >= 0) {
      var txtVal: any = input;
      if(this.bankDetail == 'benefcryBankDetails'){
        this.showmsg2= false;
      }else if(this.bankDetail == "paymentDetails"){
        this.showmsg3 = false;
      }      

    }
    return /^[a-zA-Z]*$/.test(txtVal);
  }

  onKeyPresscustDetails(params: any,type) {
    this.custnmbr = type;
    if (params.key === "Backspace" || params.key === "Tab" || params.key === "Tab" || params.key === "Delete" || params.key === "ArrowLeft" || params.key === "ArrowRight" || params.key === "End" || params.key === "Home" || params.key === "Enter" || params.key == "Alt" || params.key == "ArrowUp" || params.key == "ArrowDown" || params.key == "ArrowRight" || params.key == "ArrowLeft") {
      return true;

    } else if (!this.isKeyPressedNumeric(params)) {
      return false;
    }
  }

  private isKeyPressedNumeric(event: any): boolean {
    if (this.custnmbr == 'custnumbr') {
      var inputVal = <HTMLInputElement>document.getElementById("Input");
    } else if(this.custnmbr == "trnsframount"){
      var inputVal = <HTMLInputElement>document.getElementById("trnsframnt");
    }
    var input = inputVal.value;
    input = input + event.key;
    if (input.length >= 0) {
      var txtVal: any = input;
      if(this.custnmbr == 'custnumbr'){
        this.showmsg= false;
      }else if(this.custnmbr == "trnsframount"){
        this.showmsg1 = false;
      }      

    }
    return /^((\d{0,9})|(\.{1}\d{1,4}))$/.test(txtVal);
  }

  onClickval(){
    this.router.navigate(['loginmodule/mylogin']);
  }

  onClickBack(){
    this.router.navigate(['loginmodule/main']);
  }

  formreset(){
    this.bankTranasctionFrm.reset();  
    let today = new Date();
    var yr=today.getFullYear();var mnth=today.getMonth()+1;var dt=today.getDate();  
    let val = Math.floor(1000 + Math.random() * 9000);
    this.customrnmbr = "CUS" + yr+mnth+ dt+val;
   
  } 
  
   //Method to submit customerDetails

  submitBtnClick(){     
    if(this.bankTranasctionFrm.value.custphnmbr == "" ||this.bankTranasctionFrm.value.custphnmbr == undefined ){
      this.showmsg = true;
    }  if(this.bankTranasctionFrm.value.trnsframnt == "" || this.bankTranasctionFrm.value.trnsframnt == undefined ){
      this.showmsg1 = true;
    } 
    if(this.bankTranasctionFrm.value.benecrybank == "" ||this.bankTranasctionFrm.value.benecrybank == undefined ){
      this.showmsg2 = true;
    }  if(this.bankTranasctionFrm.value.paymnt == "" || this.bankTranasctionFrm.value.paymnt == undefined ){
      this.showmsg3 = true;
    }
    if(this.showmsg == false && this.showmsg1 == false && this.showmsg2 ==false && this.showmsg3==false) {
    let jsonVal={
      "custRefe":this.customrnmbr,
      "custmrNumber":this.bankTranasctionFrm.value.custnmbr,
      "custName":this.bankTranasctionFrm.value.custname,
      "custaddrs":this.bankTranasctionFrm.value.custaddr,
      "custPhNo":this.bankTranasctionFrm.value.custphnmbr,
      "trnsfrAmnt":this.bankTranasctionFrm.value.trnsframnt,
      "trnsfrCurncy":this.bankTranasctionFrm.value.curencySelect,
      "beneficaryBank":this.bankTranasctionFrm.value.benecrybank,
      "beneficaryAccntNo":this.bankTranasctionFrm.value.benecryacntnumbr,
      "paymentDetail":this.bankTranasctionFrm.value.paymnt,
    }  
    var transactionUrl = this.httpservice.baseUrl + this.httpservice.newTransaction;
  this.httpservice.ajaxCallService(transactionUrl,'post',JSON.stringify(jsonVal)).subscribe(response =>{
    let resp=response;
    localStorage.setItem("submitedTransaction",JSON.stringify(resp));
    this.httpservice.toastr.success('Form submited', '', {
      positionClass: 'toast-top-right', closeButton: true, timeOut: 5000
    });
    this.router.navigate(['transactionmodule/submitedtransaction']);
  })
  }else{
    if(this.bankTranasctionFrm.value.custphnmbr == "" ||this.bankTranasctionFrm.value.custphnmbr == undefined ){
      this.showmsg = true;
    }  if(this.bankTranasctionFrm.value.trnsframnt == "" || this.bankTranasctionFrm.value.trnsframnt == undefined ){
      this.showmsg1 = true;
    } 
    if(this.bankTranasctionFrm.value.benecrybank == "" ||this.bankTranasctionFrm.value.benecrybank == undefined ){
      this.showmsg2 = true;
    }  if(this.bankTranasctionFrm.value.paymnt == "" || this.bankTranasctionFrm.value.paymnt == undefined ){
      this.showmsg3 = true;
    } 
    // this.httpservice.toastr.error('Mandatory Fields required', '', {
    //   positionClass: 'toast-top-right', closeButton: true, timeOut: 5000
    // });
  }

}

}
