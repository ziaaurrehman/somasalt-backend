import styles from "./style.module.scss";
import { SideNavbar, DashboardNavbar } from "@/components/dashboard";

export const LayoutDashboard = ({ children }) => {
  return (
    <div className={styles.dashboard}>
      <SideNavbar />
      <div className={styles.dashboard_main}>
        <DashboardNavbar />
        <div className={styles.group}>{children}</div>
      </div>
    </div>
  );
};
export default LayoutDashboard;
