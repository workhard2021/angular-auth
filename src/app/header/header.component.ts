import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../service/users-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   public authGuard:Boolean=false;
  constructor(private us:UsersServiceService) { }

  ngOnInit(): void {
    
  }
  auth(){
        setTimeout(()=>{
          this.authGuard=this.us.auth();
        },500)
   
  }
   
}
