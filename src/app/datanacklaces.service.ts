import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
const url="http://localhost:5555/addnacklaces/"
@Injectable({
  providedIn: 'root'
})
export class DatanacklacesService {

  constructor(private httpclient:HttpClient) { }
  saveProd(data)  
  {
    return this.httpclient.post(url,data);
  }
  getProd()
  {
    return this.httpclient.get(url)
  }
  deleteData(id)
  {
    return this.httpclient.delete(url+id);
  }
  
  getProdById(id)
{
    return this.httpclient.get(url+id)
    
  }


}
