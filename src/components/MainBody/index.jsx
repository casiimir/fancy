import styles from "./index.module.scss";
import PostContainer from "../PostContainer";
import GridGallery from "../GridGallery";

const MainBody = () => {
  return (
    <div className={styles.MainBody}>
      <PostContainer />
      <GridGallery />
    </div>
  );
};

export default MainBody;
