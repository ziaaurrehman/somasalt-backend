import AboutCards from "@/components/Misc/AboutCards/AboutCards";
import Section from "@/components/Misc/Section/Section";
import Text from "@/components/Misc/Text/Text";
import Card from "@/components/Misc/HomeCards/Card";
import styles from "./homecard.module.scss";

export default function About() {
  return (
    <Section>
      <div className={styles.about}>
        <Text variant="heading-2">What We Do</Text>
        <div className={styles.cards}>
          <Card
            head="Create Lasting Friendships"
            path="assets/friendship.svg"
            content="Build Christian friendships with fellow believers pushing each other towards Love and Jesus"
          />
          <Card
            head="Christian Fellowships "
            path="assets/followship.svg"
            content="Encourage, Inspire and Empower each other in the pursuit of Christ"
          />
          <Card
            head="Cultivate Godly community"
            path="assets/faith2.svg"
            content="Create a community United in purpose and bringing people to Jesus "
          />
          <Card
            head="Discussion Forum"
            path="assets/chat.svg"
            content="Grow in your understanding of God's word "
          />
        </div>
      </div>
    </Section>
  );
}
