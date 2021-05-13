import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from 'src/app/models/users/users';
import { UsersServiceService } from 'src/app/service/users-service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit,OnDestroy {
 
  public data:Users[]=[];
  public sub:Subscription[]=[];

  
  constructor(private us:UsersServiceService,private http:HttpClient) { }

  ngOnInit(): void {
       this.show();

       let post={
        "userId": 44,
        "id":44,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "camara"
      }
        let heade:HttpHeaders=new HttpHeaders({"content-type":"application/json","Autorizatio":"CAMAARA"});
         
        let a= this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts",{headers:heade}).subscribe(
          (data:any[])=>{
                
              console.warn(data);
          },
          (error)=>{
             console.warn(error);
          }
       );
       this.sub.push(a);
      

  }

  show(){
       this.data=this.us.getUsers();
  }

  deleteUser(id:any){
      this.us.deleteUser(+id)
      this.data=this.us.getUsers(); 
  }
  ngOnDestroy(){
    this.sub.map(sub=>{
         sub.unsubscribe();
    })
  }

}
