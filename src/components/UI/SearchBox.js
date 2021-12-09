import styles from "./SearchBox.module.scss";
import { motion } from "framer-motion";
const SearchBox = (props) => {
  return (
    <motion.div
      className={styles.box}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      {props.children}
    </motion.div>
  );
};

export default SearchBox;
