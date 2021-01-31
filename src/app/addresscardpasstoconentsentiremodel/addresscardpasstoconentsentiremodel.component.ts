import { Component, Input, OnInit } from '@angular/core';
import { User } from './model/user.model';

@Component({
  selector: 'app-addresscardpasstoconentsentiremodel',
  templateUrl: './addresscardpasstoconentsentiremodel.component.html',
  styleUrls: ['./addresscardpasstoconentsentiremodel.component.css']
})
export class AddresscardpasstoconentsentiremodelComponent implements OnInit {

 
  @Input('user') user: User;
  
  constructor() {

    
    
       
    }

  ngOnInit() {

    console.log("Usr Obj"+this.user?.uname);


     }




}
