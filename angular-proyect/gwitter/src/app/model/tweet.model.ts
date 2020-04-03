import { User } from "./user.model";

export class Tweet {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  truncated: string;
  entities: {
    media: {
      media_url: string;
    };
  };
  user: User;
  retweet_count: number;
  favorite_count: number;
}
