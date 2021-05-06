import styles from "./index.module.scss";
import PostContainer from "../PostContainer";
import GridGallery from "../GridGallery";
import InfoCardsList from "../InfoCardsList";

const MainBody = () => {
  return (
    <div className={styles.MainBody}>
      <PostContainer />
      <GridGallery />
      <InfoCardsList />
    </div>
  );
};

export default MainBody;
