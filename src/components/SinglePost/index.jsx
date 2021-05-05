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
            width="35"
          />
          <p>Lorem Ipsum</p>
        </div>
        <div className={styles.SinglePost_info__icons}>
          <img src="./facebook.png" alt="facebook" />
          <img src="./instagram.png" alt="instagram" />
          <img src="./twitter.png" alt="twitter" />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
