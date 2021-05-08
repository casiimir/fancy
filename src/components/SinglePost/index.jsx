import styles from "./index.module.scss";

const SinglePost = ({ title, body }) => {
  return (
    <div className={styles.SinglePost}>
      <h5 className={styles.SinglePost_subtitle}>{body.substring(0, 25)}</h5>
      <h2 className={styles.SinglePost_title}>{title}</h2>
      <p className={styles.SinglePost_content}>{body}</p>
      <hr />

      <div className={styles.SinglePost_info}>
        <div className={styles.SinglePost_info__user}>
          <img
            src="https://www.svgrepo.com/show/122119/user-image-with-black-background.svg"
            alt="user-icon"
            width="28"
            height="28"
          />
          <p>Lorem Ipsum</p>
        </div>
        <div className={styles.SinglePost_info__icons}>
          <img src="./facebook.png" alt="facebook" width="34" height="20" />
          <img src="./instagram.png" alt="instagram" width="36" height="21" />
          <img src="./twitter.png" alt="twitter" width="36" height="21" />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
