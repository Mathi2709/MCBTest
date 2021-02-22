import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-mylogin',
  templateUrl: './mylogin.component.html',
  styleUrls: ['./mylogin.component.css']
})
export class MyloginComponent implements OnInit {
  public mainGrp: FormGroup;
  username: any;  
  passwrd: string = "password";
  showmsg:boolean ;
  showmsg1:boolean ;
  shwhd: string = "password";
  userName: string;
  passWord: string;
  
  constructor(
    public formbuilder:FormBuilder,
    public router: Router,
    public httpservice:HttpService,
    public toastr: ToastrService,

  ) {     
  
  }

    //Mathivathani

  ngOnInit() {   
    this.showmsg = false;
    this.showmsg1= false;
    this.mainGrp = this.formbuilder.group({   
      username:['',[Validators.required]],
      passwrd: ['', [Validators.required]],
    });     
  }

  //Method  to show hide password

  pswrdhideshow(e) {
    console.log(e);
    if (e.target.checked === true) {
      this.shwhd="text";
      }else{
        this.shwhd = "password";
      }
  
  }

  onFocus(){    
    if(this.mainGrp.value.username == "" ||this.mainGrp.value.username == undefined ){
      this.showmsg = true;
    }  if(this.mainGrp.value.passwrd == "" || this.mainGrp.value.passwrd == undefined ){
      this.showmsg1 = true;
    }if(this.mainGrp.value.username != "" && this.mainGrp.value.username != undefined){
      this.showmsg = false;
    }if(this.mainGrp.value.passwrd != "" && this.mainGrp.value.passwrd != undefined){
      this.showmsg1 = false;
    }
  }

  //Method  to submit loginform

  onClickSubmit(){
    
  if(this.mainGrp.value.username == "" ||this.mainGrp.value.username == undefined ){
    this.showmsg = true;
  }  if(this.mainGrp.value.passwrd == "" || this.mainGrp.value.passwrd == undefined ){
    this.showmsg1 = true;
  } 
  this.userName = "user";
  this.passWord = "abc@123"; 
  if(this.mainGrp.value.username == this.userName && this.mainGrp.value.passwrd ==this.passWord){ 
  if(this.mainGrp.value.username != "" && this.mainGrp.value.username != undefined && this.mainGrp.value.passwrd != "" && this.mainGrp.value.passwrd != undefined){
    localStorage.setItem("Username",JSON.stringify(this.mainGrp.value.username));
    this.httpservice.toastr.success('Successfully login', '', {
      positionClass: 'toast-top-right', closeButton: true, timeOut: 5000
    });
    this.router.navigate(["loginmodule/main"]);
  }
  }  else{
    this.httpservice.toastr.error('Invalid userid and password', '', {
      positionClass: 'toast-top-right', closeButton: true, timeOut: 5000
    });
  }
}  

}
