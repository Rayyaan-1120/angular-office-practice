import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';
import { ListdetailscomponentComponent } from './listdetailscomponent/listdetailscomponent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:"products", component:ListcomponentComponent},
  {path:"productdetail/:id",component:ListdetailscomponentComponent},
  //redirecting to other page

  // {path:"",redirectTo:"products",pathMatch:"full"},

  //when no path found
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponents = [
  ListcomponentComponent,
  ListdetailscomponentComponent,
  PageNotFoundComponent,
  FirstcomponentComponent
]
