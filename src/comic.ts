import { attachRipples } from "./ripple";
attachRipples();

import { formatDistanceToNowStrict } from "date-fns"; // Tree shakable but still heavier than dayjs

const email: string = "d.nesterov@innopolis.university";
const img: HTMLImageElement = document.getElementById("comic") as HTMLImageElement;
const title: HTMLHeadingElement = document.getElementById("title") as HTMLHeadingElement;
const date: HTMLParagraphElement = document.getElementById("date") as HTMLParagraphElement;

interface Comic {
  img: string;
  alt: string;
  safe_title: string;
  year: string;
  month: string;
  day: string;
}

// Fetch the XKCD comic identifier
fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`)
  .then((response: Response) => response.text())
  .then((id: string) => {
    // Fetch the comic using the obtained identifier
    fetch(`https://fwd.innopolis.university/api/comic?id=${id}`)
      .then((response: Response) => response.json())
      .then((comic: Comic) => {
        // Edit placeholder image source and alt text
        img.src = comic.img;
        img.alt = comic.alt;

        // Set title text
        title.textContent = comic.safe_title;

        // Set date text
        const publishDate: Date = new Date(Date.UTC(parseInt(comic.year), parseInt(comic.month), parseInt(comic.day)));
        date.textContent = `${publishDate.toLocaleDateString()} (${formatDistanceToNowStrict(publishDate)} ago)`;
      });
  });
