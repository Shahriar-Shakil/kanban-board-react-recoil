import React from "react";
import { useRecoilValue } from "recoil";
import { filteredProjectsSelector } from "../../recoil/filterSelectors";
import ProjectList from "./ProjectList";

export default function ProjectGrid() {
  const projects = useRecoilValue(filteredProjectsSelector);
  // backlog filter
  const filterByBacklog = (project) => project?.stage?.toLowerCase() === "todo";

  // doing filter
  const filterByDoing = (project) => project?.stage?.toLowerCase() === "doing";

  // review filter
  const filterByReview = (project) =>
    project?.stage?.toLowerCase() === "review";

  // blocked filter
  const filterByBlocked = (project) =>
    project?.stage?.toLowerCase() === "blocked";

  // done filter
  const filterByDone = (project) => project?.stage?.toLowerCase() === "done";
  let content = null;

  if (projects.length === 0) {
    content = (
      <>
        <p className="text-gray-500 px-10 mt-6">No Task found!</p>
        <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
          <ProjectList title="todo" />
          <ProjectList title="doing" />
          <ProjectList title="review" />
          <ProjectList title="blocked" />
          <ProjectList title="done" />
        </div>
      </>
    );
  } else if (projects.length > 0) {
    content = (
      <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
        <ProjectList title="todo" projects={projects.filter(filterByBacklog)} />
        <ProjectList title="doing" projects={projects.filter(filterByDoing)} />
        <ProjectList
          title="review"
          projects={projects.filter(filterByReview)}
        />
        <ProjectList
          title="blocked"
          projects={projects.filter(filterByBlocked)}
        />
        <ProjectList title="done" projects={projects.filter(filterByDone)} />
      </div>
    );
  }
  return <>{content}</>;
}
