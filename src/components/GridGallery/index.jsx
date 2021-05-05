import styles from "./index.module.scss";

const GridGallery = () => {
  return (
    <div className={styles.GridGallery}>
      <div className={styles.GridGallery_big}>
        <img
          className={styles.GridGallery_big__image}
          src="https://picsum.photos/200/300"
          alt=""
        />
      </div>
      <div className={styles.GridGallery_little}>
        <img
          className={styles.GridGallery_little__image}
          src="https://picsum.photos/199/300"
          alt=""
        />
      </div>
      <div className={styles.GridGallery_little}>
        <img
          className={styles.GridGallery_little__image}
          src="https://picsum.photos/200/301"
          alt=""
        />
      </div>

      <div className={styles.GridGallery_big}>
        <img
          className={styles.GridGallery_big__image}
          src="https://picsum.photos/201/300"
          alt=""
        />
      </div>

      <div className={styles.GridGallery_little}>
        <img
          className={styles.GridGallery_little__image}
          src="https://picsum.photos/200/299"
          alt=""
        />
      </div>
      <div className={styles.GridGallery_little}>
        <img
          className={styles.GridGallery_little__image}
          src="https://picsum.photos/200/298"
          alt=""
        />
      </div>
    </div>
  );
};

export default GridGallery;
