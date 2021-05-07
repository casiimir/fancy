import styles from "./index.module.scss";

const Modal = ({ children, onHandle }) => {
  return (
    <div className={styles.Modal}>
      <div className={styles.Modal_overlay}></div>
      <div className={styles.Modal_exit}>
        <button onClick={() => onHandle(false)}>X</button>
      </div>
      <div className={styles.Modal_content}>{children}</div>
    </div>
  );
};

export default Modal;
