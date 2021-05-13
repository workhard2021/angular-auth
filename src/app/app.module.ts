import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { UpdateUsersComponent } from './users/update-users/update-users.component';
import { CardUsersComponent } from './users/card-users/card-users.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { CompteUsersComponent } from './users/compte-users/compte-users.component';


@NgModule({
  declarations: [
    AppComponent,
    AddUsersComponent,
    UpdateUsersComponent,
    CardUsersComponent,
    HeaderComponent,
    ListUsersComponent,
    CompteUsersComponent
    
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
