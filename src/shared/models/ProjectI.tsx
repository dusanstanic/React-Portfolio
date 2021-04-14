import Technology from "./Technology";
import ImageI from "./ImageI";

interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  technologies: Technology[];
  images: ImageI[];
}

export default Project;
