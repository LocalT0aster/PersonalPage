import stackImg5 from "@/public/icon/arduino.png";
import stackImg1 from "@/public/icon/csharp.png";
import stackImg2 from "@/public/icon/dotnet.png";
import github from "@/public/icon/github.svg";
import proton from "@/public/icon/protonmail.png";
import stackImg4 from "@/public/icon/python.png";
import telegram from "@/public/icon/telegram.svg";
import stackImg3 from "@/public/icon/unity.png";
import project2 from "@/public/images/espgc.jpg";
import project3 from "@/public/images/site.png";
import toaster1 from "@/public/images/toaster1.webp";
import toaster2 from "@/public/images/toaster2.jpg";
import toaster3 from "@/public/images/toaster3.jpg";
import toaster4 from "@/public/images/toaster4.jpg";
import project1 from "@/public/images/vnature.png";

import { StaticImageData } from "next/image";

export interface LocalImage {
  src: StaticImageData;
  alt: string;
}

export const stackImg: LocalImage[] = [
  { src: stackImg1, alt: "C#" },
  { src: stackImg2, alt: ".NET" },
  { src: stackImg3, alt: "Unity" },
  { src: stackImg4, alt: "Python" },
  { src: stackImg5, alt: "Arduino" },
];

export const toastImg: LocalImage[] = [
  { src: toaster1, alt: "Toaster Photo" },
  { src: toaster2, alt: "Toaster Photo" },
  { src: toaster3, alt: "Toaster Photo" },
  { src: toaster4, alt: "Toaster Photo" },
];

export interface LinkImage {
  img: LocalImage;
  link: string;
  target: string;
}

export interface Project {
  limg: LinkImage;
  title: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    limg: { img: { src: project1, alt: "Virtual Nature Project" }, link: "#", target: "_self" },
    title: "Virtual Nature",
    tags: ["C#", "Unity", "VR", "Digitalization"],
  },
  {
    limg: {
      img: { src: project2, alt: "ESPGC Project" },
      link: "https://github.com/LocalT0aster/ESPGC",
      target: "_blank",
    },
    title: "ESPGC",
    tags: ["C++", "Arduino", "ESP32", "Electronic"],
  },
  {
    limg: {
      img: { src: project3, alt: "Personal Page Project" },
      link: "https://github.com/LocalT0aster/PersonalPage",
      target: "_blank",
    },
    title: "This Site",
    tags: ["Next JS", "TS", "Tailwind", "CSS", "Node"],
  },
];

export const links: LinkImage[] = [
  {
    img: {
      src: github,
      alt: "GitHub Link",
    },
    link: "https://github.com/LocalT0aster/",
    target: "_blank",
  },
  {
    img: {
      src: telegram,
      alt: "Telegram Link",
    },
    link: "tg://resolve?domain=NeRaG0n7",
    target: "_blank",
  },
  {
    img: {
      src: proton,
      alt: "Email Link",
    },
    link: "mailto:localt0aster@proton.me",
    target: "_self",
  },
];

export interface ComicData {
  img: string;
  alt: string;
  safe_title: string;
  year: string;
  month: string;
  day: string;
}
