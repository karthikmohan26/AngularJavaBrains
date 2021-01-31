import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/service.service';

@Component({
  selector: 'app-servicerestapi',
  templateUrl: './servicerestapi.component.html',
  styleUrls: ['./servicerestapi.component.css']
})
export class ServicerestapiComponent implements OnInit {

  UserName: string;
  response:any;
  constructor(private testservice :TestService) { 

    //constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
  }

  getUsers() {
  
    console.log("button clicked"+this.UserName);
    this.response=this.testservice.getUserDetails(this.UserName);
    console.log("login"+this.response.login);

    

  }

}
