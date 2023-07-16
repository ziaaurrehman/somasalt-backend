import AboutCards from "@/components/Misc/AboutCards/AboutCards";
import Section from "@/components/Misc/Section/Section";
import Text from "@/components/Misc/Text/Text";
import Image from "next/image";
import styles from "./about.module.scss";

export default function About() {
  return (
    <Section>
      <div className={styles.about}>
        <Text variant="heading-2">About</Text>
        <div className={styles.cards}>
          <AboutCards
            head="Faith"
            path="assets/hand.svg"
            content="For it is by grace you have been saved, through faith- and this is not from yourselves, it is the gift of God- Ephesians 2:8"
          />
          <AboutCards
            head="Friendship"
            path="assets/friendship.svg"
            content="But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus, his Son, purifies us from all sin. 1 John 1:7"
          />
          <AboutCards
            head="Followship"
            path="assets/followship.svg"
            content="And let us consider how we may spur one another on toward love and good deeds, Hebrews 10:24 "
          />
        </div>
      </div>
    </Section>
  );
}
