import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
import{ReactiveFormsModule} from'@angular/forms';

import{FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-earinglist',
  templateUrl: './earinglist.component.html',
  styleUrls: ['./earinglist.component.css']
})
export class EaringlistComponent implements OnInit {
  addprod:any=[]
  id:number
getProdData()
  {
    this.dataService.getProd().subscribe((res)=>
    {
      this.addprod=res;
      
    })
  }
  constructor(private dataService:DataService,private activatedrout:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getProdData();
  }

}
