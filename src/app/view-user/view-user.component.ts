import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
import{ReactiveFormsModule} from'@angular/forms';

import{FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
users:any=[]
id:number
getusersData()
  {
    this.dataService.getData().subscribe((res)=>
    {
      this.users=res;
      
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
