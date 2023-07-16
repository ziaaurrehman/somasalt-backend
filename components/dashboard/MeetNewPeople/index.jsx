import Text from "@/components/Misc/Text/Text";
import Image from "next/image";
import styles from "./style.module.scss";

export const MeetNewPeople = () => {
  return (
    <div className={styles.newPeople}>
      <Text variant="title-17">Meet New People</Text>
      <div className={styles.newPeople_people}>
        <div className={styles.newPeople_people_image}>
          <Image src="/assets/eric.png" width={1000} height={47} />
        </div>
        <div className={styles.newPeople_people_text}>
          <Text variant="title-7">Eric Jhon</Text>
          <Text variant="title-8">Designer</Text>
        </div>
        <button className={styles.newPeople_people_button}>Add</button>
      </div>
      <div className={styles.newPeople_people}>
        <div className={styles.newPeople_people_image}>
          <Image src="/assets/eric.png" width={1000} height={47} />
        </div>
        <div className={styles.newPeople_people_text}>
          <Text variant="title-7">Rimax Con </Text>
          <Text variant="title-8">Pikachu</Text>
        </div>
        <button className={styles.newPeople_people_button}>Add</button>
      </div>
      <div className={styles.newPeople_people}>
        <div className={styles.newPeople_people_image}>
          <Image src="/assets/eric.png" width={1000} height={47} />
        </div>
        <div className={styles.newPeople_people_text}>
          <Text variant="title-7">Logoes</Text>
          <Text variant="title-8">Pakiso</Text>
        </div>
        <button className={styles.newPeople_people_button}>Add</button>
      </div>
      <div className={styles.newPeople_people}>
        <div className={styles.newPeople_people_image}>
          <Image src="/assets/eric.png" width={1000} height={47} />
        </div>
        <div className={styles.newPeople_people_text}>
          <Text variant="title-7">Typrest</Text>
          <Text variant="title-8">Expert</Text>
        </div>
        <button className={styles.newPeople_people_button}>Add</button>
      </div>

      <div className={styles.newPeople_app}>
        <Text variant="title-17">Suggested App</Text>

        <div className={styles.newPeople_app_suggest}>
          <div className={styles.newPeople_app_suggest_image}>
            <Image src="/assets/logo1.svg" width={1000} height={47} />
          </div>
          <div className={styles.newPeople_app_suggest_text}>
            <Text variant="title-9">Lorem Ipsum</Text>
            <Text variant="title-10">Simply dummy text of the</Text>
          </div>
        </div>

        <div className={styles.newPeople_app_suggest}>
          <div className={styles.newPeople_app_suggest_image}>
            <Image src="/assets/logo2.svg" width={1000} height={47} />
          </div>
          <div className={styles.newPeople_app_suggest_text}>
            <Text variant="title-9">Lorem Ipsum</Text>
            <Text variant="title-10">Simply dummy text of the</Text>
          </div>
        </div>

        <div className={styles.newPeople_app_suggest}>
          <div className={styles.newPeople_app_suggest_image}>
            <Image src="/assets/logo3.svg" width={1000} height={47} />
          </div>
          <div className={styles.newPeople_app_suggest_text}>
            <Text variant="title-9">Lorem Ipsum</Text>
            <Text variant="title-10">Simply dummy text of the</Text>
          </div>
        </div>

        <div className={styles.newPeople_app_suggest}>
          <div className={styles.newPeople_app_suggest_image}>
            <Image src="/assets/logo5.svg" width={1000} height={47} />
          </div>
          <div className={styles.newPeople_app_suggest_text}>
            <Text variant="title-9">Lorem Ipsum</Text>
            <Text variant="title-10">Simply dummy text of the</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetNewPeople;
