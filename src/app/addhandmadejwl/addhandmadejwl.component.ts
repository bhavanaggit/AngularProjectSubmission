import { Component, OnInit } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import{AddHandJwl} from './AddHandJwl'
import{FormGroup,FormControl} from '@angular/forms';
import{DatahandjwlService} from '../datahandjwl.service';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'app-addhandmadejwl',
  templateUrl: './addhandmadejwl.component.html',
  styleUrls: ['./addhandmadejwl.component.css']
})
export class AddhandmadejwlComponent implements OnInit {

  form:FormGroup
  addbangles:any=[]
  prodcat:string[]=["Hand Made Jwelery"]
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
  constructor(private dataService:DatahandjwlService) { }

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

