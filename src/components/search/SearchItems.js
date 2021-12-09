import SearchBox from "../UI/SearchBox";
import styles from "./SearchItems.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../store/searchSlice";
import { useState } from "react";

const SearchItems = (props) => {
  const [button, setButton] = useState(false);
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const saveHandler = (e) => {
    if (!loginState) {
      alert("You must be logged in to use this feature!");
    } else {
      const videoObj = {
        title: props.title,
        img: props.img,
        videoId: props.videoId,
      };
      dispatch(searchActions.saveResult(videoObj));
      setButton(true);
    }
  };
  return (
    <SearchBox>
      <h4 className={styles.text}>{props.title}</h4>
      <a
        href={`https://youtube.com/watch?v=${props.videoId}`}
        target="_blank"
        rel="noreferrer"
      >
        <img className={styles.img} src={props.img} alt="" />
      </a>
      {!button && (
        <button className={styles.btn} onClick={saveHandler}>
          Save
        </button>
      )}
      {button && <button className={styles.btn}>Saved!</button>}
    </SearchBox>
  );
};

export default SearchItems;
