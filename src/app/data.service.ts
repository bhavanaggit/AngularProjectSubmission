import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

const api="http://localhost:1111/users/";
const url="http://localhost:2222/addearings/";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private httpclient:HttpClient) { }
  saveData(data)  
  {
    return this.httpclient.post(api,data);
  }
  saveProd(data)  
  {
    return this.httpclient.post(url,data);
  }
  getData()
  {
    return this.httpclient.get(api)
  }
  getProd()
  {
    return this.httpclient.get(url)
  }
  deleteData(id)
  {
    return this.httpclient.delete(api+id);
  }
  
  getProdById(id)
{
    return this.httpclient.get(url+id)
    
  }
  
}
