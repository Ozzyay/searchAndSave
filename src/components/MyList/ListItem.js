import { useDispatch } from "react-redux";
import styles from "./ListItem.module.scss";
import { searchActions } from "../../store/searchSlice";
import SearchBox from "../UI/SearchBox";
const ListItem = (props) => {
  const dispatch = useDispatch();
  const removeHandler = (e) => {
    dispatch(searchActions.removeSave(props.videoId));
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
      <button className={styles.btn} onClick={removeHandler}>
        Remove
      </button>
    </SearchBox>
  );
};

export default ListItem;
