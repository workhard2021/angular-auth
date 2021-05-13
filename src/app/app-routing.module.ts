import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { CompteUsersComponent } from './users/compte-users/compte-users.component';
import { AuthGuard } from './users/guard-user.service';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { UpdateUsersComponent } from './users/update-users/update-users.component';

const routes: Routes = [
      {path:"",component:ListUsersComponent},
      {path:"user/form",component:AddUsersComponent},
      {path:"user/update/:id",canActivate:[AuthGuard],component:UpdateUsersComponent},
      {path:"user/compte/:id",canActivate:[AuthGuard],component:CompteUsersComponent},
      {path:"**",redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
