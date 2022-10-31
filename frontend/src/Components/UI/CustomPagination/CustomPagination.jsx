import PaginationItem from "./CustomPaginationitem";

function CustomPagination({
                              Pages,
                              NextFunction,
                              PrevFunction,
                              setPage,
                              currentPage,
                          }) {
    return (
        <nav
            aria-label="Page navigation example"
            className="d-lg-flex justify-content-lg-center"
        >
            <ul className="pagination">
                <li className="page-item" onClick={PrevFunction}>
                    <i className="page-link" aria-label="Previous">
                        {" "}
                        <span aria-hidden="true">&laquo;</span>{" "}
                    </i>
                </li>
                {Pages?.map((page) => (
                    <PaginationItem
                        className={
                            currentPage === page ? "current-page page-link" : "page-link"
                        }
                        onClick={() => setPage(page)}
                        Page={page}
                    />
                ))}
                <li className="page-item" onClick={NextFunction}>
                    <i className="page-link" aria-label="Next">
                        {" "}
                        <span aria-hidden="true">&raquo;</span>{" "}
                    </i>
                </li>
            </ul>
        </nav>
    );
}

export default CustomPagination;
