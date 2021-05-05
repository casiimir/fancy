import styles from "./index.module.scss";
import menu from "../../img/menu.png";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <h3 className={styles.Navbar_logo}>Fancy</h3>

      {/* Mobile - hamburger style */}
      <button className={styles.Navbar_btn}>
        <img
          className={styles.Navbar_btn__image}
          onClick={() => {}}
          src={menu}
          alt="menu-icon"
        />
      </button>

      {/* Desktop - classical style */}
      <div className={styles.Navbar_links}>
        <ul>
          <li>lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
