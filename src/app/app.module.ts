import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HumansComponent } from './humans/humans.component';
import { HumanDetailComponent } from './human-detail/human-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HumanSearchComponent } from './human-search/human-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HumansComponent,
    HumanDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HumanSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
