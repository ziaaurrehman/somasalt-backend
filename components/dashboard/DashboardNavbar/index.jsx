import ListItem from "@/components/Misc/ListItems/ListItems";
import { Menu } from "@/Icons/icons";
import Image from "next/image";
import Text from "@/components/Misc/Text/Text";
import styles from "./style.module.scss";
import ResponsiveNavbar from "../ResponsiveNavbar";
import { useState } from "react";

export const DashboardNavbar = () => {
  const [show, setShow] = useState(false);
  const values = ["Dashboard", "Graphs ", "Other Pages", " Ui Elements"];
  return (
    <div className={styles.dashboard}>
      <div className={styles.logo}>
        <Text variant="title-17">Somasalt</Text>
      </div>
      <div className={show? styles.miniNav : styles.hide}>
        <ResponsiveNavbar />
      </div>
      <div className={styles.dashboard_icons}>
        <div className={styles.icon1}>
          <Image src="/assets/menu2.svg" height={13} width={18} />
        </div>
        <p onClick={() => setShow(!show)}>
          <Menu />
        </p>
      </div>
      <ListItem values={values} />
    </div>
  );
};

export default DashboardNavbar;
