import styles from "./style.module.scss";
import Image from "next/image";
import Text from "@/components/Misc/Text/Text";

export const DashboardCard = () => {
  return (
    <div className={styles.card}>
      <Text variant="title-11">280K</Text>
      <Text>Followers</Text>
      <div className={styles.card_dot}>
        <Image src="/assets/dot.svg" height={4} width={4} />
        <Image src="/assets/dot.svg" height={4} width={4} />
      </div>
    </div>
  );
};

export default DashboardCard;
