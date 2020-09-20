import { Component, OnInit } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import{AddEarings} from './addEarings';
import{FormGroup,FormControl} from '@angular/forms';
import { DataService } from '../data.service';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'app-addearning-details',
  templateUrl: './addearning-details.component.html',
  styleUrls: ['./addearning-details.component.css']
})
export class AddearningDetailsComponent implements OnInit {
  form:FormGroup
  addearing:any=[]
  prodcat:string[]=["Earnings"]
  
onFileSelect(event)
{
  if(event.target.files.length > 0){
    const file=(event.target.files[0] as File);
    this.form.get('file').setValue(file);
    console.log(this.form.get('file').value);
    this.addearing.file=this.form.get('file').setValue(file);
  }
}








  add()
  {
    //this.user.push(this.form.value);
    this.dataService.saveProd(this.form.value).subscribe((res)=>{
    alert("data saved")
    })
  console.log(this.form.value)
   /*console.log(this.form.value);
   const formData=new FormData();
   
   formData.append('file',this.form.get('file').value);
   
   this.dataService.saveProd(formData).subscribe((res)=>{
     console.log("data added",res);
     alert("data saved");
     console.log(res);

   })
*/

  }
  getData()
    {
      this.dataService.getProd().subscribe((res)=>{
        this.addearing=res;
      })
    }
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getData();
    this.form=new FormGroup(
      {
      prod_code:new FormControl(""),
      prod_name:new FormControl(""),
      prod_cat:new FormControl(""),
      price:new FormControl(""),
      color:new FormControl(""), 
      design:new FormControl(""),
file:new FormControl("")
    })
  }
  
  
}
