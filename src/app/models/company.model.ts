import { Project } from "./project.model";

export interface Company {
  name: string;
  link?: string;
  projects: Project[];
}
