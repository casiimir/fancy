import styles from "./index.module.scss";

const Modal = ({ children, onHandle }) => {
  return (
    <div className={styles.Modal}>
      <div
        className={styles.Modal_overlay}
        onClick={() => onHandle(false)}
      ></div>
      <div className={styles.Modal_exit}></div>
      <div className={styles.Modal_content}>{children}</div>
    </div>
  );
};

export default Modal;
