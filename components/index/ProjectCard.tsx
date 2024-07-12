import Image from "next/image";
import { Project } from "../data";

type Props = {
  project: Project;
  index: number;
};

const ProjectCard = (props: Props) => {
  return (
    <a
      className="rounded-lg bg-stone-700 m-4 px-1 pt-1 pb-2 transition hover:rotateXY-12"
      href={props.project.limg.link}
      target={props.project.limg.target}
    >
      <Image
        className="w-80"
        src={props.project.limg.img.src}
        alt={props.project.limg.img.alt}
        key={`pcardimg${props.index}`}
      />
      <p>{props.project.title}</p>
      <div className="flex flex-row flex-wrap">
        {props.project.tags.map((tag, index) => (
          <div className="rounded-full px-2 bg-neutral-400 text-black" key={`pcard${props.index}tag${index}`}>
            {tag}
          </div>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
