import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Users } from '../models/users/users';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

   public users:Array<Users>=[{
    id:1,
    email:"camara@gmail.com",
    name:"camara",
    password:"password ",
    comment:"coucou",
    role:false,
    language:"reactjs"
   },{  id:2,
    email:"david@gmail.com",
    name:"camara",
    password:"password",
    comment:"Bojour a tous",
    role:false,
    language:"angular"}
  ];
  public subjects=new Subject<Users>();
  public authGuard=false;
  
   constructor() { }
    
   addUser(data:Users){
        this.users=[{...data,id:Date.now()},...this.users];
   }

   deleteUser(id:number){
        
        this.users=this.users.filter(values=>values.id!==id);

       
   }
   
   update(data:Users):Boolean{
     
       let user:Users | undefined=this.users.find(value=>value.id===+data.id);
       
       if(user!==undefined){
            this.users=this.users.filter(values=>values.id !==+data.id);
            if(data.password=="" || data.password==null){
               this.users=[{...data,password:user.password},...this.users]; 

            }else{
              this.users=[data,...this.users]; 
            }
            
            return true
        } 
        return false; 
   }

   getUser(id:Number){
     
       return  this.users.find(value=>value.id===+id);
   }
   getUsers(){
      return this.users;
   }

   auth(){
     
          this.authGuard=!this.authGuard;
         return this.authGuard;
   }

}
