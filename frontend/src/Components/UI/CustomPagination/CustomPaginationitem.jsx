import {Link} from 'react-router-dom'

function CustomPaginationItem({Page}) {
  return (
    <li className="page-item">
      <a className="page-link" href="#">
        {Page}
      </a>
    </li>
  );
}

export default CustomPaginationItem;
