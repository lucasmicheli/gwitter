import { User } from "./user.model";

export class Tweet {
  created_at: string;
  id: number;
  text: string;
  user: User;
  retweet_count: number;
  favorite_count: number;
}
