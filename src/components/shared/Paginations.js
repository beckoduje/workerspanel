import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import { useSelector } from "react-redux";

export default function Paginations({ setSliceIndex }) {
  const workers = useSelector((state) => state.workers.workers);
  const [activePage, getActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    getActivePage(pageNumber);
    setSliceIndex(pageNumber - 1);
  };
  useEffect(() => {
    console.log(workers);
  }, [workers]);
  return (
    <Pagination
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
