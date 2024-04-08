import styles from'./Navigation.module.css'
const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            H O M E
          </a>
          <div className={styles.underline}></div>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            A B O U T
          </a>
          <div className={styles.underline}></div>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            W O R K S
          </a>
          <div className={styles.underline}></div>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            B L O G
          </a>
          <div className={styles.underline}></div>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            C O N T A C T
          </a>
          <div className={styles.underline}></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
