import { useRecoilCallback, useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid"; // Import the v4 function from uuid
import { projectsState } from "./atoms";

const useAddProject = () => {
  const setProjects = useSetRecoilState(projectsState);

  const addProject = (newProject) => {
    const projectWithUniqueId = { ...newProject, id: uuidv4() }; // Add a unique ID to the new project
    setProjects((prevProjects) => [...prevProjects, projectWithUniqueId]);
  };

  return addProject;
};
const useEditProject = () => {
  const setProjects = useSetRecoilState(projectsState);

  const editProject = (editedProject) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === editedProject.id
          ? Object.assign({}, project, editedProject)
          : project
      )
    );
  };

  return editProject;
};
const useRemoveProject = () => {
  const removeProject = useRecoilCallback(
    ({ snapshot, set }) =>
      async (projectId) => {
        const projects = await snapshot.getPromise(projectsState);
        const updatedProjects = projects.filter(
          (project) => project.id !== projectId
        );
        set(projectsState, updatedProjects);
      }
  );

  return removeProject;
};
export { useAddProject, useEditProject, useRemoveProject };
