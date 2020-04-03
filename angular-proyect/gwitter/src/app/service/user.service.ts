import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor() { }

  getRecentTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.urlRecentTweets);
  }



}