import { Injectable,Output, EventEmitter } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{User} from './registration/user'


import { map } from 'rxjs/operators';
const api="http://localhost:1111/users/";
const url="http://localhost:2222/addearings/";

const baseUrl="http://localhost/project";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpclient:HttpClient) { }

  saveData(data)  
  {
   
      return this.httpclient.post(baseUrl + '/userReg.php',data,{ responseType: 'text' })
      .pipe(map(User => {
      return User;
      }));
      
  }
  saveProd(data)  
  {
    return this.httpclient.post(url,data);
  }
  getData()
  {
    return this.httpclient.get(baseUrl+'/getusers.php')
  }
  getProd()
  {
    return this.httpclient.get(url)
  }
  deleteData(id)
  {
    return this.httpclient.delete(baseUrl+id);
  }
  
  getProdById(id)
{
    return this.httpclient.get(url+id)
    
  }
  

  public userlogin(username, password) {
    alert(username)
    return this.httpclient.post(baseUrl + '/login.php', { username, password },{responseType:'text'})
    
    }
//token
setToken(token: string) {
  localStorage.setItem('token', token);
  }
  getToken() {
  return localStorage.getItem('token');
  }
  deleteToken() {
  localStorage.removeItem('token');
  }
  isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
  return true
  }
}
}
