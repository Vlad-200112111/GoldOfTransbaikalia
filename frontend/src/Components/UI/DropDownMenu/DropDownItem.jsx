import React from "react";
function DropDownItem({ MenuItem }) {
  console.log(MenuItem);
  return (
    <li>
      <a className="dropdown-item" href={MenuItem.link}>
        {MenuItem.name}
      </a>
    </li>
  );
}

export default DropDownItem;
