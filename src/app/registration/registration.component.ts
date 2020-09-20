import { Component, OnInit } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import{User} from './user';
import{FormGroup,FormControl} from '@angular/forms';
import { DataService } from '../data.service';
import{FormsModule} from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form:FormGroup
  user:any=[]

  register()
  {
    //this.user.push(this.form.value);
   // console.log(this.form.value);
    this.dataService.saveData(this.form.value).subscribe((res)=>{
      console.log("data added",res)
      alert("data saved")
    })
    //console.log(this.form.value)
  }
  getData()
    {
      this.dataService.getData().subscribe((res)=>{
        this.user=res;
      })
    }
  constructor(private dataService:DataService) { }
  ngOnInit(): void {

    this.getData();
    this.form=new FormGroup(
      {
      first_Name:new FormControl(""),
      last_Name:new FormControl(""),
      mobile:new FormControl(""),
      password:new FormControl(""),
      email:new FormControl("")
    })

  
  
  
  }

}
