import { projects } from "../data";
import ProjectCard from "./ProjectCard";
type Props = {};

const ProjectsSection = (props: Props) => {
  return (
    <>
      <h2 className="text-center text-4xl mt-1">My Projects:</h2>
      <div className="flex flex-row flex-wrap justify-around">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={`pcard${index}`} />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
