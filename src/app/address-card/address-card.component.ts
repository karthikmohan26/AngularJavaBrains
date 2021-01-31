import { Component, OnInit } from '@angular/core';
import { User } from '../addresscardpasstoconentsentiremodel/model/user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user:User;
  message : string;

    
  constructor() {

    this.user= {
 
      uname: 'Karthik',
      designation:'Sr. Associate-Projects',
      address: '166 TUDOR LN , MANCHESTER',
      phone :['8605699258','8607303391','8043006264']
  
    }

    this.message='String Binding example';

  }   

  ngOnInit(): void {
  }

}
