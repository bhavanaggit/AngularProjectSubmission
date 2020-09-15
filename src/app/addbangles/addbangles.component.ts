import { Component, OnInit } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import{AddBangles} from './addBangles'
import{FormGroup,FormControl} from '@angular/forms';
import {DatabanglesService} from '../databangles.service';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'app-addbangles',
  templateUrl: './addbangles.component.html',
  styleUrls: ['./addbangles.component.css']
})
export class AddbanglesComponent implements OnInit {
  form:FormGroup
  addbangles:any=[]
  prodcat:string[]=["Bangales"]
  register()
  {
    //this.user.push(this.form.value);
    this.dataService.saveProd(this.form.value).subscribe((res)=>{
      alert("data saved")
    })
   //console.log(this.form.value)
  }
  getData()
    {
      this.dataService.getProd().subscribe((res)=>{
        this.addbangles=res;
      })
    }
  constructor(private dataService:DatabanglesService) { }

  ngOnInit(): void {
    this.getData();
    this.form=new FormGroup(
      {
      prod_code:new FormControl(""),
      prod_name:new FormControl(""),
      prod_cat:new FormControl(""),
      price:new FormControl(""),
      color:new FormControl(""), 
      design:new FormControl(""),
      file: new FormControl("")
    })

  
  }

}
