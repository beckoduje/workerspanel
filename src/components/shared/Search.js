import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { workersActions } from "../../store/workers-slice";

export default function Search({ searchBarType }) {
  const dispatch = useDispatch();
  const searchedSideWorker = useSelector(
    (state) => state.workers.searchedSideWorker
  );
  const searchedTopNavWorker = useSelector(
    (state) => state.workers.searchedTopNavWorker
  );
  const navigate = useNavigate();

  const handleSearchedWorkers = (e, barType) => {
    dispatch(
      workersActions.setSearchedWorker({
        type: barType,
        worker: e.target.value,
      })
    );
  };

  const handleResetSearchedWorker = (barType) => {
    dispatch(
      workersActions.setSearchedWorker({
        type: barType,
        worker: "",
      })
    );
  };

  useEffect(() => {
    console.log(searchedTopNavWorker);
  }, [searchedTopNavWorker]);

  return (
    <form action="#" method="post" className="worker-search-form">
      <input
        placeholder="Search for worker"
        type="text"
        className="worker-search-form__input"
        onChange={(e) => {
          handleSearchedWorkers(e, searchBarType);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter" && e.target.value.trim() !== "") {
            e.preventDefault();
            navigate("/searched-workers/" + e.target.value, {
              replace: false,
            });
            // e.target.value = "";
            handleResetSearchedWorker(searchBarType);
          } else if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      />
      <button className="worker-search-form__button" type="button">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}
