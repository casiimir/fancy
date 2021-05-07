import styles from "./index.module.scss";
import PostContainer from "../PostContainer";
import GridGallery from "../GridGallery";
import InfoCardsList from "../InfoCardsList";

const MainBody = ({ onGalleryHandle }) => {
  return (
    <div className={styles.MainBody}>
      <PostContainer />
      <GridGallery />
      <InfoCardsList onGalleryHandle={onGalleryHandle} />
    </div>
  );
};

export default MainBody;
