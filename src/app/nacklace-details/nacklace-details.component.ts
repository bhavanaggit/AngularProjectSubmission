import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import{DatanacklacesService} from '../datanacklaces.service';
import{ActivatedRoute,Router, Data} from '@angular/router';
@Component({
  selector: 'app-nacklace-details',
  templateUrl: './nacklace-details.component.html',
  styleUrls: ['./nacklace-details.component.css']
})
export class NacklaceDetailsComponent implements OnInit {
  form:FormGroup
  addnacklaces:any=[]
  id:number
 file:any;

  
update()
{
console.log();
}
  constructor(private dataService:DatanacklacesService,private activatedroute:ActivatedRoute,private router:Router) { }
  

  ngOnInit(): void {
    this.activatedroute.params.subscribe((param)=>
    {
      this.id=param["id"]
      this.dataService.getProdById(this.id).subscribe((data)=>
      {
        this. addnacklaces=data
        this.form=new FormGroup(
          {
            prod_code:new FormControl(this.addnacklaces.prod_code),
          prod_name:new FormControl(this.addnacklaces.prod_name),
          prod_cat:new FormControl(this.addnacklaces.prod_cat),
          price:new FormControl(this.addnacklaces.price),
          color:new FormControl(this.addnacklaces.color),
          design:new FormControl(this.addnacklaces.design),
          
          
        })
        
        this.file=this.addnacklaces.file;
      })
    })
  }
  }

