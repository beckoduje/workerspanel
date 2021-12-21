import React, { useState, useContext, useEffect } from "react";
import Pagination from "react-js-pagination";

import { ApplicationContext } from "../../context/application-context";

export default function Paginations() {
  const { workers } = useContext(ApplicationContext);
  const [activePage, getActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    getActivePage(pageNumber);
  };
  useEffect(() => {
    console.log(workers);
  }, [workers]);
  return (
    <Pagination
      firstPageText={<span className="first-page">First</span>}
      lastPageText={<span className="last-page">Last</span>}
      prevPageText={<i className="fas fa-arrow-alt-circle-left"></i>}
      nextPageText={<i className="fas fa-arrow-alt-circle-right"></i>}
      activePage={activePage}
      itemsCountPerPage={10}
      totalItemsCount={workers.length < 0 ? 0 : workers.length}
      pageRangeDisplayed={5}
      onChange={handlePageChange}
    />
  );
}
