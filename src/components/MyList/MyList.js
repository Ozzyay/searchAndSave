import { useSelector } from "react-redux";
import styles from "./MyList.module.scss";
import ListItem from "./ListItem";
const MyList = () => {
  const movieList = useSelector((state) => state.search.saveList);
  const boxes = movieList.map((elem) => (
    <ListItem
      title={elem.title}
      img={elem.img}
      videoId={elem.videoId}
      key={elem.videoId}
    />
  ));
  return <div className={styles.grid}>{boxes}</div>;
};

export default MyList;
