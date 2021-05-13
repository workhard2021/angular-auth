import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/users/users';
import { UsersServiceService } from 'src/app/service/users-service.service';


@Component({
  selector: 'app-compte-users',
  templateUrl: './compte-users.component.html',
  styleUrls: ['./compte-users.component.css']
})
export class CompteUsersComponent implements OnInit {
  
  public  user:Users|any;
  constructor(private activateRoute:ActivatedRoute,private us:UsersServiceService) { }

  ngOnInit(): void {
        this.user=this.us.getUser(this.activateRoute.snapshot.params.id);
   }

   deleteUser(id:Number){
          this.us.deleteUser(+id);
          this.user={}
   }

}
