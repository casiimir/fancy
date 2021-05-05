import styles from "./index.module.scss";
import PostContainer from "../PostContainer";

const MainBody = () => {
  return (
    <div className={styles.MainBody}>
      <PostContainer />;
    </div>
  );
};

export default MainBody;
