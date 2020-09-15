import { Component, OnInit } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import{AddNacklace} from './addNacklace'
import{FormGroup,FormControl} from '@angular/forms';
import {DatanacklacesService} from '../datanacklaces.service';
import{FormsModule} from '@angular/forms'

@Component({
  selector: 'app-addnacklaces',
  templateUrl: './addnacklaces.component.html',
  styleUrls: ['./addnacklaces.component.css']
})
export class AddnacklacesComponent implements OnInit {
  form:FormGroup
  addnacklaces:any=[]
  prodcat:string[]=["Nacklaces"]
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
        this.addnacklaces=res;
      })
    }
  constructor(private dataService:DatanacklacesService) { }

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
