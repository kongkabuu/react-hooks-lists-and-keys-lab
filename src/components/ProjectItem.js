import React from "react";

function ProjectItem({ technologies, id, name }) {
  console.log(id);
  return (
    <div className="project-item">
      <div className="technologies">
        <span>{name}</span>
        {technologies?.map((technology) => (
          <span key={id}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
