import { Component } from '@angular/core';
import { User } from './addresscardpasstoconentsentiremodel/model/user.model';
import { TestService } from './shared/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularJavaBrains';

  user: User;
  inputText:string='Hello';
  

  Constructor() {
     this.user= new User();
     this.user.uname='Avantikaa';
     this.user.designation='PAT';
     this.user.address='Manchester';
     this.user.phone['8043006264']
  }
}


