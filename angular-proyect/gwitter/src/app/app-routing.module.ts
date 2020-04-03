import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeListComponent } from "./home-list/home-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { TweetDetailsComponent } from "./tweet-details/tweet-details.component";
import { SearchComponent } from "./search/search.component";
import { ConfigurationComponent } from "./configuration/configuration.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeListComponent },
  { path: "show/:id", component: TweetDetailsComponent },
  { path: "search", component: SearchComponent },
  { path: "configuration", component: ConfigurationComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
