import type { Author } from "./author";

export class NewsStory {
  id: number;
  title: string;
  url: string;
  time: number;
  score: number;
  by: string;
  author: Author;

  imageUrl: string;

  constructor(
    id: number,
    title: string,
    score: number,
    url: string,
    time: number,
    imageUrl: string,
    author: Author
  ) {
    this.id = id;
    this.title = title;
    this.score = score;
    this.url = url;
    this.time = time;
    this.author = author;
    this.by = "";
    this.imageUrl = "https://picsum.photos/200";
  }
}
