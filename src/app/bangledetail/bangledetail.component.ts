import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import{DatabanglesService} from '../databangles.service';
import{ActivatedRoute,Router, Data} from '@angular/router';
@Component({
  selector: 'app-bangledetail',
  templateUrl: './bangledetail.component.html',
  styleUrls: ['./bangledetail.component.css']
})
export class BangledetailComponent implements OnInit {

  form:FormGroup
  addbangles:any=[]
  id:number
 file:any;

  
update()
{
console.log();
}
  constructor(private dataService:DatabanglesService,private activatedroute:ActivatedRoute,private router:Router) { }
  

  ngOnInit(): void {
    this.activatedroute.params.subscribe((param)=>
    {
      this.id=param["id"]
      this.dataService.getProdById(this.id).subscribe((data)=>
      {
        this.addbangles=data
        this.form=new FormGroup(
          {
            prod_code:new FormControl(this.addbangles.prod_code),
          prod_name:new FormControl(this.addbangles.prod_name),
          prod_cat:new FormControl(this.addbangles.prod_cat),
          price:new FormControl(this.addbangles.price),
          color:new FormControl(this.addbangles.color),
          design:new FormControl(this.addbangles.design),
          
          
        })
        
        this.file=this.addbangles.file;
      })
    })
  }
  }

