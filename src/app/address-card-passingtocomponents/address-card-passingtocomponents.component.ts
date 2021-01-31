import { Component, Input, OnInit } from '@angular/core';
import { User } from '../addresscardpasstoconentsentiremodel/model/user.model';
import { TestService } from '../shared/service.service';

@Component({
  selector: 'app-address-card-passingtocomponents',
  templateUrl: './address-card-passingtocomponents.component.html',
  styleUrls: ['./address-card-passingtocomponents.component.css']
})
export class AddressCardPassingtocomponentsComponent implements OnInit {

  user:User;
  @Input('name') userName: string;
  isCollpased :boolean=true;
  
  
  
  constructor() {

    
    }

  ngOnInit() {

    this.user= {

        uname: this.userName,
        designation:'PAT',
        address: 'MANCHESTER',
        phone :['8043006264']
    
      }
 
  }

  OnCollapseExpand() {

    console.log("Button CLicked");
    this.isCollpased=!this.isCollpased;

  }
}
