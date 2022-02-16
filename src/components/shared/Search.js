import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { workersActions } from "../../store/workers-slice";

export default function Search() {
  const dispatch = useDispatch();
  const searchedWorker = useSelector((state) => state.workers.searchedWorker);
  const navigate = useNavigate();

  return (
    <form action="#" method="post" className="worker-search-form">
      <input
        placeholder="Search for worker"
        type="text"
        className="worker-search-form__input"
        onChange={(e) => {
          dispatch(workersActions.setSearchedWorker(e.target.value));
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter" && e.target.value.trim() !== "") {
            e.preventDefault();
            navigate("/searched-workers/" + searchedWorker, { replace: false });
            e.target.value = "";
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
