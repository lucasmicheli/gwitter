import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../model/tweet.model';

@Component({
  selector: 'app-twit',
  templateUrl: './twit.component.html',
  styleUrls: ['./twit.component.css']
})
export class TwitComponent implements OnInit {
  @Input() item: Tweet;

  constructor() { }

  ngOnInit(): void {}



}

