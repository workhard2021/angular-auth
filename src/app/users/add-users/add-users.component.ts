import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from 'src/app/models/users/users';
import { UsersServiceService } from 'src/app/service/users-service.service';


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
   public errors:Users|any={
    email:"",
    name:"",
    comment:"",
    password:"",
    language:"",
};
   public language:Array<any>=["reactjs","java","angular","nodejs","php","mysql","mongdb"];
   public message="";
   constructor(private us:UsersServiceService) { }

  ngOnInit(): void {
     this.initForm()
  }

  initForm(){
      return {
        id:0,
        email:"",
        name:"",
        password:"",
        comment:"",
        language:""
      };
  }
  
  addUsers(data:NgForm){

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
       this.us.addUser(data.value);
       data.reset();
       this.message="Souscription effectuée";
    }
   
      
  }

}
