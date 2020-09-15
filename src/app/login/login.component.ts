import { Component, OnInit } from '@angular/core';
import{ReactiveFormsModule, FormGroup} from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

import { DataService } from '../data.service';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

form=FormGroup
id:number
email1 = ''
password1 = ''


  constructor(private dataservice:DataService,private router: Router) { }
  login()
  {
    if(this.email1 == "admin@gmail.com" && this.password1 == "admin"){
      
      this.router.navigate(['/login/dashboard'])
  }
  else
  {
      alert("invalid username and password")
  }
  }
  ngOnInit(): void {
   
    
  }

}
