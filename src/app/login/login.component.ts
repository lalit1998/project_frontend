import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { user } from '../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email_id:string;
  password:string;
  hide:boolean=true;
  type:string;
  flag:boolean=false;
  constructor(private _user:UserService,private _route:Router) { }
  onSubmit()
  {
    this._user.getLogin(new user(this.email_id,this.password)).subscribe((data: any) => {
      console.log(data);
      if (data.length === 1) {
        this.type=data[0].type;
        if(this.type=="user")
        {
        localStorage.setItem("email_id", this.email_id);
        console.log(this.email_id);
        this._route.navigate(["menu/manageuser"]);
        }
        else{
          localStorage.setItem("email_id", this.email_id);

          console.log(this.email_id);
          this._route.navigate(["menu/adminprofile"]);
        }
      } else {
        console.log(this.email_id);
        console.log(this.password);
        alert("The Email_Id Or the Password is wrong");
      }
    });

  }

  onCancel(){}
  addform(){}
  ngOnInit() {
  }


}
