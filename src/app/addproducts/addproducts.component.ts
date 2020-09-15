import { Component, OnInit } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import{Addprod} from './addprod';
import{FormGroup,FormControl} from '@angular/forms';
import { DataService } from '../data.service';
import{FormsModule} from '@angular/forms';
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  form:FormGroup
  addprod:any=[]
  prodcat:string[]=["Earnings","Necklace","Bangles"]
  
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
        this.addprod=res;
      })
    }
  constructor(private dataService:DataService) { }
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
