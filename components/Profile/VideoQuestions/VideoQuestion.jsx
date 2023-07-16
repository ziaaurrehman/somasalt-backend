import styles from "./video.module.scss";
import Image from "next/image";
import Text from "@/components/Misc/Text/Text";

export default function VideoQuestion() {
  return (
    <div className={styles.video}>
      <Text variant="title-12">Video Question</Text>
      <div className={styles.video_play}>
        <Image src="/assets/play.svg" width={80} height={80} />
      </div>
      <div className={styles.video_more}>
        <div className={styles.video_more_content}></div>
        <div className={styles.video_more_content}></div>
        <div className={styles.video_more_content}></div>
        <div className={styles.video_more_content}></div>
        <div className={styles.video_more_content}></div>
        <div className={styles.video_more_content}></div>
      </div>
    </div>
  );
}
