import { Component, OnInit } from '@angular/core';
import{SharedService} from '../shared.service';
import{ActivatedRoute,Router} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  form:FormGroup
  AddEarings:any=[]
  id:number
  constructor(private dataService:DataService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((param)=>
    {
      this.id=param["id"]
      this.dataService.getProdById(this.id).subscribe((data)=>
      {
        this.AddEarings=data
        this.form=new FormGroup(
          {
            
          prod_name:new FormControl(this.AddEarings.prod_name),
         
          price:new FormControl(this.AddEarings.price),
          
          
        })
      
        
        
      })
    })
  }
  }
