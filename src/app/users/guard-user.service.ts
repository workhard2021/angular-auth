import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersServiceService } from '../service/users-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private routeAuth: Router,private authUser:UsersServiceService) {}

canActivate (
             route: ActivatedRouteSnapshot,
             state: RouterStateSnapshot)
  :Observable<boolean> | boolean| Promise<boolean> {
        
         if(this.authUser.authGuard){
            return true;
          }
         else{
           return this.routeAuth.navigate(["/"]);
         }
         
       
}

}
