import { Calendar, Chat, Poles, Profile } from "@/Icons/icons";
import styles from "./style.module.scss";
import Link from "next/link";

export default function ResponsiveNavbar() {
  return (
    <div className={styles.miniBar}>
      <ul className={styles.miniBar_menu}>
        <li>Dashboard </li>
        <li>Graphs</li>
        <li>Other Pages</li>
        <li>Ui Elements</li>
      </ul>
      <div className={styles.miniBar_icons}>
        <Link href="/dashboard">
          <div className={styles.miniBar_icons_icon}>
            <Calendar width={15} height={15} />
          </div>
        </Link>
        <div className={styles.miniBar_icons_icon}>
          <Poles width={15} height={15} />
        </div>
        <div className={styles.miniBar_icons_icon}>
          <Chat width={15} height={15} />
        </div>
        <Link href="/profile">
          <div className={styles.miniBar_icons_icon}>
            <Profile width={15} height={15} />
          </div>
        </Link>
      </div>
    </div>
  );
}
