import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HumansComponent } from './humans/humans.component';
import { HumanDetailComponent } from './human-detail/human-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HumansComponent,
    HumanDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
