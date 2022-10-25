import PaginationItem from "./CustomPaginationitem";

function CustomPagination({ Pages }) {
  return (
    <nav
      aria-label="Page navigation example"
      className="d-lg-flex justify-content-lg-center"
    >
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            {" "}
            <span aria-hidden="true">&laquo;</span>{" "}
          </a>
        </li>
        {Pages?.map((page) => (
          <PaginationItem Page={page} />
        ))}
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            {" "}
            <span aria-hidden="true">&raquo;</span>{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default CustomPagination;
