import styles from "./dashboard.module.scss";
import {
  ChatPreview,
  DashboardCard,
  MeetNewPeople,
  EventFeed,
} from "@/components/dashboard";
import LayoutDashboard from "@/components/layouts/LayoutDashboard/LayoutDashboard";

export default function Dashboard() {
  return (
    <LayoutDashboard>
      <div>
        <div className={styles.dashboard_main_follower}>
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
        <EventFeed />
        <ChatPreview />
      </div>

      <MeetNewPeople />
    </LayoutDashboard>
  );
}
