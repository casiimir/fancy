import styles from "./index.module.scss";

const InfoCard = () => {
  return (
    <div className={styles.InfoCard}>
      <h2 className={styles.InfoCard_id}>01</h2>
      <div className={styles.InfoCard_content}>
        <p className={styles.InfoCard_icon}>🐼</p>
        <p className={styles.InfoCard_subtitle}>
          Sapeva pure ca oggi je e te stevema inda 'sta machina
        </p>
        <h2 className={styles.InfoCard_title}>
          Quann' tu me purtast' a spara' chillu cristian' p'a prima vota.
        </h2>
        <button className={styles.InfoCard_button}>Clicca qui</button>
      </div>
    </div>
  );
};

export default InfoCard;
