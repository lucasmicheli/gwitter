import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { TwitterAPIService } from "./service/twitter-api.service";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [TwitterAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {}
