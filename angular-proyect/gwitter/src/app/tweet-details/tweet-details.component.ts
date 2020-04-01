import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Tweet } from "../model/tweet.model";
import { TwitterAPIService } from "../service/twitter-api.service";

@Component({
  selector: "app-tweet-details",
  templateUrl: "./tweet-details.component.html",
  styleUrls: ["./tweet-details.component.css"]
})
export class TweetDetailsComponent implements OnInit {
  tweet: Tweet;

  constructor(
    private route: ActivatedRoute,
    private twitterService: TwitterAPIService
  ) {}

  ngOnInit(): void {
    this.showTweet();
  }

  showTweet() {
    this.route.paramMap.subscribe(params => {
      this.twitterService.getOneTweet(params.get("id")).subscribe(tweet => {
        this.tweet = tweet;
        console.log(this.tweet);
      });
    });
  }
}
