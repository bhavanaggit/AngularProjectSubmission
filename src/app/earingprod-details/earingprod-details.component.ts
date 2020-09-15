import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';

import{HttpClient} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-earingprod-details',
  templateUrl: './earingprod-details.component.html',
  styleUrls: ['./earingprod-details.component.css']
})
export class EaringprodDetailsComponent implements OnInit {

  
 

  


  constructor( private dataService:DataService,private activatedrout:ActivatedRoute) { }

 
  ngOnInit(): void {
    
   
  
  }

}
