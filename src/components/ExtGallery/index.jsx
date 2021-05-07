import styles from "./index.module.scss";
import ImgGallery from "../../imgGallery.json";

const ExtGallery = ({ onGalleryHandle }) => {
  return (
    <div className={styles.ExtGallery}>
      <div className={styles.ExtGallery_overlay}></div>
      <div className={styles.ExtGallery_content}>
        <div className={styles.ExtGallery_gallery__text}>
          <h3>
            Quann' tu me purtast' a spara' chillu cristian' p'a prima vota.
          </h3>
        </div>
        <div className={styles.ExtGallery_gallery__image}>
          {ImgGallery.map(({ id, url }) => (
            <img
              src={url}
              alt="standard"
              key={id}
              className={styles.ExtGallery_gallery__img}
            />
          ))}
        </div>
      </div>
      <div
        className={styles.ExtGallery_closeBtn}
        onClick={() => onGalleryHandle(false)}
      >
        X
      </div>
    </div>
  );
};

export default ExtGallery;
