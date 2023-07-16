import ListItem from "@/components/Misc/ListItems/ListItems";
import { Facebook, Instagram, Twitter, Menu } from "@/Icons/icons";
import ResponsiveNavbar from "../ResponsiveNavbar";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const values = ["Home", "About", "Service", "Contact Us"];
  return (
    <div className={styles.navbar}>
      <h1 className={styles.navbar_navbarHeading}>
        <Link href="/dashboard">Somasalt</Link>
      </h1>
      <div className={show ? styles.miniNav : styles.hide}>
        <ResponsiveNavbar />
      </div>
      <ListItem values={values} />
      <div className={styles.navbar_icons}>
        <p className={styles.navbar_icons_para}>
          <Facebook />
        </p>
        <p className={styles.navbar_icons_para}>
          <Instagram />
        </p>
        <p className={styles.navbar_icons_para}>
          <Twitter />
        </p>
      </div>
      <div className={styles.navbar_menu}>
        <p className={styles.navbar_menu_para} onClick={() => setShow(!show)}>
          <Menu />
        </p>
      </div>
    </div>
  );
}
