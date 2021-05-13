import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/users/users';
import { UsersServiceService } from 'src/app/service/users-service.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {
  public data:Users | any;
  public errors:Users|any ={
    email:"",
    name:"",
    comment:"",
    password:"",
    language:"",
  
}
;
  public message:String="";
  public language:Array<any>=["reactjs","java","angular","nodejs","php","mysql","mongdb"];
  constructor(private us:UsersServiceService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
        this.data=this.us.getUser(this.activeRoute.snapshot.params.id);
      
        
        
  }
  update(data:NgForm){
    
    this.message="";
    let i=false;
    for (const [key, value] of Object.entries(data.value)) {
         
         if(value=="" && key!=="role"){
              this.errors={...this.errors,[key]:"Veuillez remplir le champs"};
              i=true;
         }else{
            if(key!=="role"){ 
              this.errors={...this.errors,[key]:""};
            }
         }
    }

    if(!i){
          
         if(this.us.update(data.value)){ 
             
            this.message="Mise à jour a été effectuée";
            this.data=this.us.getUser(this.activeRoute.snapshot.params.id);

         }else{
            this.message="ERROR";
         }

        
    }
          
  }

}
