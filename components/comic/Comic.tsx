"use server";
import { ComicData } from "@/components/data";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
dayjs.extend(relativeTime);

const Comic = async () => {
  async function fetchComic() {
    "use server";
    const email: string = "d.nesterov@innopolis.university";

    let data: ComicData = (await await (
      await fetch(
        `https://fwd.innopolis.university/api/comic?id=${await (
          await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`)
        ).text()}`,
      )
    ).json()) as ComicData;
    return data;
  }
  let comic: ComicData = await fetchComic();

  return (
    <>
      <div className="bg-stone-700 text-center align-center rounded-2xl w-max mx-auto px-4">
        <h1 className="text-4xl">{comic.safe_title}</h1>
        <p>
          {dayjs(
            Date.UTC(Number.parseInt(comic.year), Number.parseInt(comic.month), Number.parseInt(comic.day)),
          ).fromNow()}
        </p>
      </div>
      <div className="max-w-screen relative min-h-96">
        <Image src={comic.img} alt={comic.alt} fill={true} priority={true} quality={100} className="object-contain" />
      </div>
    </>
  );
};

export default Comic;
