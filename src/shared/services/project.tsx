import axios from "axios";
import Project from "../models/ProjectI";

async function fetch() {
  const res = await axios.get<Project[]>(`http://localhost:3000/project`);

  return res.data;
}

export { fetch };
