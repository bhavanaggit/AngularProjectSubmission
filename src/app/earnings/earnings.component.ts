import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
import{ReactiveFormsModule} from'@angular/forms';

import{FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent implements OnInit {
  addprod:any=[]
  id:number
getProdData()
  {
    this.dataService.getProd().subscribe((res)=>
    {
      this.addprod=res;
      
    })
  }
 getProdbyId()
 {
   this.dataService.getProdById(this.id).subscribe((data)=>
   {
     this.addprod=data;
   })
 }
 
 
  constructor(private dataService:DataService,private activatedrout:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getProdData();
  this.getProdbyId();
   
  }

}
