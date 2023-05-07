import React from "react";

function NavBar() {
  const links = ["#home", "#about", "#projects"];

  return (
    <nav>
      {links.map((item, index) => {
        return (
          <li key={index}>
            <a href={item}>{item}</a>
          </li>
        );
      })}
    </nav>
  );
}

export default NavBar;
