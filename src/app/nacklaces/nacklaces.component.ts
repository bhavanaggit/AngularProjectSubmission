import { Component, OnInit } from '@angular/core';
import{DatanacklacesService} from '../datanacklaces.service';
import{ReactiveFormsModule} from'@angular/forms';
import{FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-nacklaces',
  templateUrl: './nacklaces.component.html',
  styleUrls: ['./nacklaces.component.css']
})
export class NacklacesComponent implements OnInit {

  addnacklaces:any=[]
  id:number
getProdData()
  {
    this.dataService.getProd().subscribe((res)=>
    {
      this.addnacklaces=res;
      
    })
  }
 getProdbyId()
 {
   this.dataService.getProdById(this.id).subscribe((data)=>
   {
     this.addnacklaces=data;
   })
 }
 
 
  constructor(private dataService:DatanacklacesService,private activatedrout:ActivatedRoute,private router:Router) { }


  ngOnInit(): void {
    this.getProdData();
  this.getProdbyId();
  }

}
