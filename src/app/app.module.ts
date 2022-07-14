import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';
import { ListdetailscomponentComponent } from './listdetailscomponent/listdetailscomponent.component';
import { ListserviceService } from './listservice.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    // FirstcomponentComponent,
    // ListcomponentComponent,
    // ListdetailscomponentComponent,
    // PageNotFoundComponent,
    routingcomponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ListserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
