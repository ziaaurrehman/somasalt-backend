import styles from "./questionCard.module.scss";
import Text from "@/components/Misc/Text/Text";

export default function QuestionCard() {
  return (
    <div className={styles.question}>
      <Text variant="title-2">Question 1</Text>
      <Text variant="title-7">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard
      </Text>
    </div>
  );
}
