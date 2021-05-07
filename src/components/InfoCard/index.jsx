import styles from "./index.module.scss";

const InfoCard = ({ title, subTitle, value, button, icon }) => {
  return (
    <div className={styles.InfoCard}>
      <h2 className={styles.InfoCard_id}>{value}</h2>
      <div className={styles.InfoCard_content}>
        {icon && <p className={styles.InfoCard_icon}>{icon}</p>}
        <p className={styles.InfoCard_subtitle}>{subTitle}</p>
        <h2
          className={`${styles.InfoCard_title} ${!subTitle && styles.noHeader}`}
        >
          {title}
        </h2>
        {button && (
          <button className={styles.InfoCard_button}>Clicca qui</button>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
