import { Component, OnInit } from '@angular/core';

import{DatabanglesService} from '../databangles.service';
import{ReactiveFormsModule} from'@angular/forms';

import{FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-bangles',
  templateUrl: './bangles.component.html',
  styleUrls: ['./bangles.component.css']
})
export class BanglesComponent implements OnInit {
  addbangles:any=[]
  id:number
getProdData()
  {
    this.dataService.getProd().subscribe((res)=>
    {
      this.addbangles=res;
      
    })
  }
 getProdbyId()
 {
   this.dataService.getProdById(this.id).subscribe((data)=>
   {
     this.addbangles=data;
   })
 }
 
 
  constructor(private dataService:DatabanglesService,private activatedrout:ActivatedRoute,private router:Router) { }


  ngOnInit(): void {
    this.getProdData();
  this.getProdbyId();
  }

}
