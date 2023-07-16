import styles from "./profile.module.scss";
import QuestionCard from "../QuestionCards/QuestionCard";
import UserInfo from "../UserInfo/UserInfo";
import VideoQuestion from "../VideoQuestions/VideoQuestion";
import Interest from "../Interest&Hobies/Interest";
import LayoutDashboard from "@/components/layouts/LayoutDashboard/LayoutDashboard";

export default function Profile() {
  return (
    <div className={styles.main}>
      <div className={styles.main_info}>
        <UserInfo />
        <div className={styles.main_info_question}>
          <VideoQuestion />
        </div>
      </div>
      <div className={styles.main_card}>
        <QuestionCard />
        <QuestionCard />
        <Interest />
      </div>
      <div className={styles.main_video}>
        <VideoQuestion />
      </div>
    </div>
  );
}
