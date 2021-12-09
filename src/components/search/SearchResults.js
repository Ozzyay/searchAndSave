import { useSelector } from "react-redux";
import SearchItems from "./SearchItems";
import styles from "./SearchResults.module.scss";

const SearchResults = () => {
  const movieList = useSelector((state) => state.search.results);
  const boxes = movieList.map((elem) => (
    <SearchItems
      title={elem.snippet.title}
      img={elem.snippet.thumbnails.medium.url}
      videoId={elem.id.videoId}
      key={elem.id.videoId}
    />
  ));
  return <div className={styles.grid}>{boxes}</div>;
};

export default SearchResults;
