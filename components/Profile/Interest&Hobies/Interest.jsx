import styles from "./interest.module.scss";
import Text from "@/components/Misc/Text/Text";

export default function Interest() {
  return (
    <div className={styles.question}>
      <Text variant="title-2">Interests & Hobbies</Text>
      <ul className={styles.question_interest}>
        <li>Photography</li>
        <li>Woodworking</li>
        <li>Writing</li>
        <li>Dance</li>
        <li>Cooking</li>
      </ul>
    </div>
  );
}
