import Text from "@/components/Misc/Text/Text";
import Image from "next/image";
import styles from "./style.module.scss";
import Chatbox from "@/components/Misc/Chatbox/Chatbox";

export const ChatPreview = () => {
  return (
    <div className={styles.chat}>
      <Text variant="title-12">Chat Preview</Text>
      <div className={styles.chat_preview}>
        <div className={styles.chat_preview_contacts}>
          <div className={styles.chat_preview_contacts_search}>
            <input type="text" placeholder="Search" />
          </div>
          <div className={styles.chat_preview_contacts_people}>
            <div className={styles.chat_preview_contacts_people_info}>
              <div className={styles.chat_preview_contacts_people_image}>
                <Image src="/assets/eric.png" width={1000} height={47} />
              </div>
              <div className={styles.chat_preview_contacts_people_text}>
                <Text variant="title-9">Eric Jhon</Text>
                <p>Eric is Typing......</p>
              </div>
            </div>
            <div className={styles.chat_preview_contacts_people_time}>
              <p>2 min</p>
              <div>2</div>
            </div>
          </div>
          <div className={styles.chat_preview_contacts_people}>
            <div className={styles.chat_preview_contacts_people_info}>
              <div className={styles.chat_preview_contacts_people_image}>
                <Image src="/assets/eric.png" width={1000} height={47} />
              </div>
              <div className={styles.chat_preview_contacts_people_text}>
                <Text variant="title-9">Eric Jhon</Text>
                <p>Eric is Typing......</p>
              </div>
            </div>
            <div className={styles.chat_preview_contacts_people_time}>
              <p>2 min</p>
              <div>2</div>
            </div>
          </div>
        </div>
        <div className={styles.chat_preview_chatbox}>
          <Chatbox />
        </div>
      </div>
    </div>
  );
};

export default ChatPreview;
