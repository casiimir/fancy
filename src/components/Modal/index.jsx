import styles from "./index.module.scss";

const Modal = ({ children }) => {
  return (
    <div className={styles.Modal}>
      <div className={styles.Modal_overlay}></div>
      <div className={styles.Modal_content}>
        <ul>
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Dolor</li>
        </ul>
        {children}
      </div>
    </div>
  );
};

export default Modal;
