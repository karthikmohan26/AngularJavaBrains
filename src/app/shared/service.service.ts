import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  
  response1: any;

  constructor(private http:HttpClient) {

  }

  getUserDetails(UserName:string) {

    console.log("UserName in Service"+UserName);
    return this.http.get('https://api.github.com/users/'+UserName).
     subscribe((response)=>{
       this.response1= response;
    })
  }
}
