import { Component, OnInit, NgModule } from "@angular/core";
import { TwitterAPIService } from "../service/twitter-api.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  tweets: any;
  result: string;
  searched: boolean = true;

  constructor(private twitterService: TwitterAPIService) {}

  ngOnInit(): void {}

  getSearchInput(input: string) {
    this.result = input;
  }

  getSearchingTweets() {
    return this.twitterService
      .getSearchingTweets(this.result)
      .subscribe(tweets => {
        this.tweets = tweets.statuses;
        this.searched = false;
        console.log(this.tweets);
      });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { TwitterAPIService } from "../service/twitter-api.service";
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { NgxSpinnerService } from "ngx-spinner";

// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent implements OnInit {

//   tweets: any;
//   result: string = "messi";

//   faSearch = faSearch;
//   searchQuery : string;
//   initTweets : number = 20;
//   index : number = 1;
//   counter : number;
//   searchInProgress : boolean;
//   chargedAllTweets : boolean = false;
//   noScroll : boolean = true;

//   constructor(
//     private twitterService: TwitterAPIService,
//     private spinner: NgxSpinnerService,
//   ) { }

//   ngOnInit(): void {
//     console.log(this.result);
//     this.getSearchingTweets();
//   }

//   getSearchInput(input: string) {
//     this.result = input;
//   }

//   getSearchingTweets() {
//     return this.twitterService
//       .getSearchingTweets(this.result)
//       .subscribe(tweets => {
//         this.tweets = tweets.statuses;
//         console.log(this.tweets);
//       });

//   getResults():void {
//     /* Avoid an empty search */
//     if(this.searchQuery === ' '){
//       this.searchQuery = '';
//     }

//     /* Do the proper search */
//     if (this.searchQuery.length >= 3) {
//       this.getTweets();
//       this.searchInProgress = true;
//     } else {
//       this.searchInProgress = false;
//     }
//   }

//   getTweets():void {
//     this.twitterService.getSearchingTweets(this.searchQuery) // REVISAR: función de búsqueda
//     .subscribe(tweets => {this.tweets = tweets.statuses}); // Ver este error
//   }

//   onScroll() {
//     this.spinner.show(); // Load spinner while the tweets are loading
//     if (this.counter >= 50) { // Display message of max tweets possible
//       this.chargedAllTweets = true;
//     }

//     if (this.noScroll) {
//       this.noScroll = false;
//       this.index++;
//       this.counter = this.initTweets * this.index;
//       this.chargeMoreTweets(this.counter);
//     }
//   };

//   chargeMoreTweets(count: number) { /* Revisar qué hacer cuando cargó todos */
//     this.twitterService.getRecentTweets().subscribe(tweets => {
//       this.tweets = tweets;
//       this.noScroll = true;
//       this.spinner.hide(); /* Hide spinner */
//     });
