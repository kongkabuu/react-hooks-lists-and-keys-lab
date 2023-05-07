import React from "react";

function ProjectItem({ technologies, id, name, about }) {
  console.log(id);
  return (
    <div className="project-item">
      <div className="technologies">
        <h1>{name}</h1>
        <p>{about}</p>
        {technologies?.map((technology) => (
          <span key={id}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
