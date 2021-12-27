import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../../context/application-context";

export default function Search() {
  const { setSearchedWorker } = useContext(ApplicationContext);
  return (
    <form action="#" method="post" className="worker-search-form">
      <input
        placeholder="Search for worker"
        type="text"
        className="worker-search-form__input"
        onChange={(e) => {
          // if (setSearchedWorker !== undefined) {
          //   setSearchedWorker(e.target.value);
          // }
          setSearchedWorker(e.target.value);
        }}
        // onChange={(e) => getUserInput(e.target.value.trim())}
        // onKeyPress={(e) => {
        //   if (e.key === "Enter" && e.target.value.trim() !== "") {
        //     e.preventDefault();
        //     history.push("/results/" + userInput);
        //     setGoSearch(!goSearch);
        //     e.target.value = "";
        //   } else if (e.key === "Enter") {
        //     e.preventDefault();
        //   }
        // }}
      />
      {/* {userInput || userInput.length >= 1 ? (
        <Link
          to={"/results/" + userInput}
          className="search-button-link"
          onClick={() => setGoSearch(!goSearch)}
        >
          <button className="search-button" type="button">
            <i className="fas fa-search"></i>
          </button>
        </Link>
      ) : (
        <Link to={currPath} className="search-button-link">
          <button className="search-button" type="button">
            <i className="fas fa-search"></i>
          </button>
        </Link>
      )} */}
      <button className="worker-search-form__button" type="button">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}
