import React from "react";

function HeaderSearch() {
  return (
    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
      <input
        type="search"
        className="border-success form-control"
        placeholder="Поиск..."
        aria-label="Search"
      />
    </form>
  );
}

export default HeaderSearch;
