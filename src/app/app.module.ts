import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
//import { AppGroceryComponent } from './app-grocery/app-grocery.component';
import { GroceryComponent } from './app.grocery';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [GroceryComponent]
})
export class AppModule { }
