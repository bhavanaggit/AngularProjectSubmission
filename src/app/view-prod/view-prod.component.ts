import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
import{ReactiveFormsModule} from'@angular/forms';

import{FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view-prod',
  templateUrl: './view-prod.component.html',
  styleUrls: ['./view-prod.component.css']
})
export class ViewProdComponent implements OnInit {
  addprod:any=[]
  id:number
getusersData()
  {
    this.dataService.getProd().subscribe((res)=>
    {
      this.addprod=res;
      
    })
  }
  delete(id)
{
  this.dataService.deleteData(id).subscribe((res)=>
  {
    alert("Data deleted")
    this.getusersData();
  })
}
  constructor(private dataService:DataService,private activatedrout:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getusersData();
   
  }

}
