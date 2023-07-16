import Section from "@/components/Misc/Section/Section";
import Text from "@/components/Misc/Text/Text";
import Button from "@/components/Misc/Button/Button";
import Image from "next/image";
import styles from "./joinus.module.scss";

export default function JoinUs() {
  return (
    <Section>
      <div className={styles.join}>
        <div className={styles.join_play}>
          <Image src="/assets/playpic.png" height={500} width={500} />
        </div>
        <div className={styles.join_textDiv}>
          <Text variant="heading-3">Join us</Text>
          <Text variant="title-3">
            Community created with you in mind! Join us today and develop a
            oneness of spiritual closeness that far surpasses the limitations of
            natural human friendships as we authentically share the life of
            Christ with one another
          </Text>
          <Button variant="style-2">Sign Up Now</Button>
        </div>
      </div>
    </Section>
  );
}
