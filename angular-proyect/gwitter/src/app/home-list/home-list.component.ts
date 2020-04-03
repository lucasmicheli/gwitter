import { Component, OnInit } from "@angular/core";
import { TwitterAPIService } from "../service/twitter-api.service";
import { Tweet } from "../model/tweet.model";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-home-list",
  templateUrl: "./home-list.component.html",
  styleUrls: ["./home-list.component.css"]
})
export class HomeListComponent implements OnInit {
  tweetList: Tweet[] = [];
  notScrolly = true;
  notEmptyPost = true;

  constructor(
    private twitterService: TwitterAPIService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getTweets();
  }

  onScroll() {
    if (this.notScrolly && this.notEmptyPost) {
      this.spinner.show();
      this.notScrolly = false;
      this.getTweets();
    }
  }

  getTweets() {
    this.twitterService.getRecentTweets().subscribe((res: Tweet[]) => {
      if (res && res.length) {
        this.notScrolly = true;
        this.tweetList = [...this.tweetList, ...res];
        this.spinner.hide();
      } else {
        this.notScrolly = false;
        this.notEmptyPost = false;
      }
      this.tweetList = res;
    });
  }
}
