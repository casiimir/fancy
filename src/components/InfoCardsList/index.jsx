import styles from "./index.module.scss";
import InfoCard from "../InfoCard";

import posts from "../../posts.json";

const InfoCardsList = ({ onGalleryHandle }) => {
  return (
    <div className={styles.InfoCardsList}>
      {posts.map(({ ...infoCardsData }) => (
        <InfoCard
          {...infoCardsData}
          key={infoCardsData.value}
          onGalleryHandle={onGalleryHandle}
        />
      ))}
    </div>
  );
};

export default InfoCardsList;
