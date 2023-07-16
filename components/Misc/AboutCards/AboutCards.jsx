import Text from "../Text/Text";
// import faith from "../../../assets/faith.png";
import Image from "next/image";
import styles from "./about.module.scss";

export default function AboutCards({ head, content, path }) {
  return (
    <div className={styles.card}>
      <Image src={path} height={50} width={50} />
      <Text variant="title-4">{head}</Text>
      <Text variant="title-3">{content}</Text>
    </div>
  );
}
