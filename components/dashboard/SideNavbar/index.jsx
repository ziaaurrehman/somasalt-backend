import Text from "@/components/Misc/Text/Text";
import styles from "./style.module.scss";
import { Calendar, Chat, Poles, Profile } from "@/Icons/icons";
import Link from "next/link";

export const SideNavbar = () => {
  return (
    <div className={styles.sidebar}>
      <Text variant="title-5">Somasalt</Text>
      <div className={styles.sidebar_icons}>
        <Link href="/dashboard">
          <Calendar />
        </Link>
      </div>
      <div className={styles.sidebar_icons}>
        <Poles />
      </div>
      <div className={styles.sidebar_icons}>
        <Chat />
      </div>
      <div className={styles.sidebar_icons}>
        <Link href="/profile">
          <Profile />
        </Link>
      </div>
    </div>
  );
};

export default SideNavbar;
