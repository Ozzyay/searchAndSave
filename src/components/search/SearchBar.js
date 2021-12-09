import styles from "./SearchBar.module.scss";
import SearchIcon from "../UI/searchIcon";
import { useRef } from "react";
import searchHandler from "../utility/searchHttpHandler";
import { searchActions } from "../../store/searchSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const search = useRef();
  const searchSubmitHandler = async (e) => {
    e.preventDefault();
    const results = await searchHandler(search.current.value);
    if (!results) {
      return alert("Failed");
    } else {
      dispatch(searchActions.searchResults(results));
      navigate("/search");
    }
  };
  return (
    <form className={styles.form} onSubmit={searchSubmitHandler}>
      <div>
        <input type="text" placeholder="Search here..." ref={search}></input>
        <button>
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
