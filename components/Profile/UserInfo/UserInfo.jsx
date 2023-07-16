import styles from "./userInfo.module.scss";
import Image from "next/image";
import Text from "@/components/Misc/Text/Text";

export default function UserInfo() {
  return (
    <div className={styles.main}>
      <div className={styles.main_profile}>
        <figure className={styles.main_profile_pic}>
          <Image src="/assets/profilepic.svg" width={1000} height={500} />
        </figure>
      </div>
      <div className={styles.main_info}>
        <Text variant="title-2">Brandy, 27</Text>
        <Text variant="title-14">San Francisco, CA</Text>
        <div className={styles.main_info_text}>
          <Text variant="title-15">About</Text>
          <div className={styles.main_info_text_gender}>
            <Text variant="title-6">Gender:</Text>
            <Text variant="title-8"> &nbsp; Female</Text>
          </div>
          <div className={styles.main_info_text_gender}>
            <Text variant="title-6">Interested in a </Text>
            <Text variant="title-16">&nbsp;Long term releationship</Text>
          </div>
          <div className={styles.main_info_text_gender}>
            <Image src="/assets/university.svg" width={15} height={15} />
            <Text variant="title-6">
              &nbsp;&nbsp;&nbsp;Uiversity Of San Francisco
            </Text>
          </div>
          <div className={styles.main_info_text_gender}>
            <Image src="/assets/marking.svg" width={15} height={15} />
            <Text variant="title-6">&nbsp;&nbsp;&nbsp;Markiting </Text>
          </div>

          <div className={styles.parent}>
            <div className={styles.parent_child1}>
              <div className={styles.main_info_text_other}>
                <Text variant="title-6">Politics </Text>
                <div className={styles.main_info_text_other_others}>
                  <Text variant="title-8">Liberal</Text>
                </div>
              </div>
              <div className={styles.main_info_text_other}>
                <Text variant="title-6">Ethnicity </Text>
                <div className={styles.main_info_text_other_others}>
                  <Text variant="title-8">South Asian</Text>
                </div>
              </div>
              <div className={styles.main_info_text_other}>
                <Text variant="title-6">Religion </Text>
                <div className={styles.main_info_text_other_others}>
                  <Text variant="title-8"> Agnostic</Text>
                </div>
              </div>
              <div className={styles.main_info_text_other}>
                <Text variant="title-6">Personality </Text>
                <div className={styles.main_info_text_other_others}>
                  <Text variant="title-8">Extraverted , Logical</Text>
                </div>
              </div>
            </div>

            <div className={styles.parent_child2}>
              {/* <div className={styles.main_info_text_other}>
                <Text variant="title-6">Children </Text>
                <div className={styles.main_info_text_other_others}>
                  <Text variant="title-8">No</Text>
                </div>
              </div> */}
              <div className={styles.health_info}>
                <Text variant="title-6">Children </Text>
                <div className={styles.health_info_child}>
                  <Text variant="title-8">No</Text>
                </div>
              </div>
              <div className={styles.health}>
                <div className={styles.health_info}>
                  <Text variant="title-6">Smoke </Text>
                  <div className={styles.health_info_answer}>
                    <Text variant="title-8">No</Text>
                  </div>
                </div>
                <div className={styles.health_info}>
                  <Text variant="title-6">Driking </Text>
                  <div className={styles.health_info_answer}>
                    <Text variant="title-8">No</Text>
                  </div>
                </div>
                <div className={styles.health_info}>
                  <Text variant="title-6">Drugs </Text>
                  <div className={styles.health_info_answer}>
                    <Text variant="title-8">No</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
