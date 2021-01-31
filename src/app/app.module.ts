import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { AddressCardPassingtocomponentsComponent } from './address-card-passingtocomponents/address-card-passingtocomponents.component';
import { AddresscardpasstoconentsentiremodelComponent } from './addresscardpasstoconentsentiremodel/addresscardpasstoconentsentiremodel.component';
import { FormsModule } from '@angular/forms';
import { TestService } from './shared/service.service';
import { ServicerestapiComponent } from './servicerestapi/servicerestapi.component';
import{HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './routing/home/home.component';
import { SettingsComponent } from './routing/settings/settings.component';



@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    AddressCardComponent,
    AddressCardPassingtocomponentsComponent,
    AddresscardpasstoconentsentiremodelComponent,
    ServicerestapiComponent,
    HomeComponent,
    SettingsComponent
  
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
