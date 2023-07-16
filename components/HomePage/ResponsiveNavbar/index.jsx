import { Facebook, Instagram, Twitter } from "@/Icons/icons";
import styles from "./style.module.scss";

export default function ResponsiveNavbar() {
  return (
    <div className={styles.miniBar}>
      <ul className={styles.miniBar_menu}>
        <li>Home </li>
        <li>About</li>
        <li>Service</li>
        <li> Contact Us</li>
      </ul>
      <div className={styles.miniBar_icons}>
        <p className={styles.miniBar_icons_para}>
          <Facebook />
        </p>
        <p className={styles.miniBar_icons_para}>
          <Instagram />
        </p>
        <p className={styles.miniBar_icons_para}>
          <Twitter />
        </p>
      </div>
    </div>
  );
}
