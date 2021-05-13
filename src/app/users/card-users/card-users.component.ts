import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from 'src/app/models/users/users';

@Component({
  selector: 'app-card-users',
  templateUrl: './card-users.component.html',
  styleUrls: ['./card-users.component.css']
})

export class CardUsersComponent implements OnInit {
 
  @Input() item:|any;
  @Output() deleteUserEmitter=new EventEmitter<Users>();
  constructor() { }
  ngOnInit(): void {

  }

  deleteUser(id:any){
     this.deleteUserEmitter.emit(id);
     
  }


}
