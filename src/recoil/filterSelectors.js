import { selector } from "recoil";
import { filterState, projectsState } from "./atoms";

// Selector to get the projects filtered by assignedTo user ID
export const filteredProjectsSelector = selector({
  key: "filteredProjects",
  get: ({ get }) => {
    const projects = get(projectsState);
    const assignedTo = get(filterState).assignedTo;
    if (assignedTo) {
      return projects.filter((project) => project.assign.id === assignedTo);
    }

    return projects;
  },
});
