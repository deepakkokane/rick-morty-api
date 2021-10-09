import React from "react";

const Pagination = ({ pages, setNewPage, currpage }) => {
  return (
    <nav aria-label="Page navigation example fixed fixed-bottom mt-5">
      <ul className="pagination">
        <li className="page-item">
          <span
            className="page-link"
            onClick={() => setNewPage((prev) => prev + 1)}
          >
            Previous
          </span>
        </li>
        {pages.map((v, i) => (
          <li className="page-item" key={i}>
            <span
              className={"page-link " + (currpage === v && "active")}
              onClick={() => setNewPage(v)}
            >
              {v}
            </span>
          </li>
        ))}
        <li className="page-item">
          <span
            className="page-link"
            onClick={() => setNewPage((prev) => prev - 1)}
          >
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
