import React from "react";
import {Link} from 'react-router-dom'

function HeaderItem({ Item }) {
  return (
    <li className="me-3">
      <Link to={Item.link} className="link-dark nav-link px-2">
        {Item.name}
      </Link>
    </li>
  );
}

export default HeaderItem;
