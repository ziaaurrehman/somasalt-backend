import Text from "@/components/Misc/Text/Text";
import Image from "next/image";
import styles from "./style.module.scss";

export const EventFeed = () => {
  return (
    <div className={styles.event}>
      <Text variant="title-12">Event Feed</Text>
      <div className={styles.event_feed}>
        <div className={styles.event_feed_feedCard}>
          <Image src="/assets/feed1.svg" width={1000} height={200} />
          <Text variant="title-13">Lorem Ipsum</Text>
          <Text variant="title-8">
            Simply dummy text of the printing and typesetting industry.
          </Text>
          <Text variant="title-8">April 29</Text>
        </div>

        <div className={styles.event_feed_feedCard}>
          <Image src="/assets/feed2.svg" width={1000} height={200} />
          <Text variant="title-13">Lorem Ipsum</Text>
          <Text variant="title-8">
            Simply dummy text of the printing and typesetting industry.
          </Text>
          <Text variant="title-8">April 29</Text>
        </div>

        <div className={styles.event_feed_feedCard}>
          <Image src="/assets/feed3.svg" width={1000} height={200} />
          <Text variant="title-13">Lorem Ipsum</Text>
          <Text variant="title-8">
            Simply dummy text of the printing and typesetting industry.
          </Text>
          <Text variant="title-8">April 29</Text>
        </div>
      </div>
    </div>
  );
};

export default EventFeed;
