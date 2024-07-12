import { roboto } from "@/components/fonts";
import React from "react";

const Hero: React.FC = () => {
  return (
    <header id="hero_title" className="z-10">
      <div className="bg-[#8a0404] bg-blend-lighten opacity-60 mix-blend-lighten absolute top-[-1rem] -z-10 right-[-11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#4d1111]"></div>
      <div className="bg-[#1f156b] bg-blend-lighten opacity-60 mix-blend-lighten absolute top-[-1rem] -z-10 left-[-11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#15104d]"></div>
      <h1 className={`${roboto.className} herotext max-lg:whitespace-pre-wrap`}>Welcome To The T0aster Zone</h1>
      <h1 className={`${roboto.className} herotext max-lg:whitespace-pre-wrap`} id="herotext_c">
        Welcome To The T0aster Zone
      </h1>
      <h1 className={`${roboto.className} herotext max-lg:whitespace-pre-wrap`} id="herotext_m">
        Welcome To The T0aster Zone
      </h1>
      <h1 className={`${roboto.className} herotext max-lg:whitespace-pre-wrap`} id="herotext_y">
        Welcome To The T0aster Zone
      </h1>
    </header>
  );
};

export default Hero;
