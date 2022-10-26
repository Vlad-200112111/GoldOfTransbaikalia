import {Link} from 'react-router-dom'

function CustomPaginationItem({Page, ...restProps}) {
  return (
    <li  className="page-item">
      <a {...restProps}  href="#">
        {Page}
      </a>
    </li>
  );
}

export default CustomPaginationItem;
