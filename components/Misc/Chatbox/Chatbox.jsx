import styles from "./chatbox.module.scss";
import Image from "next/image";
import Text from "../Text/Text";

export default function Chatbox() {
  return (
    <div className={styles.chatbox}>
      <div className={styles.chatbox_people}>
        <div className={styles.chatbox_people_info}>
          <div className={styles.chatbox_people_image}>
            <Image src="/assets/eric.png" width={1000} height={47} />
          </div>
          <div className={styles.chatbox_people_text}>
            <Text variant="title-9">Eric Jhon</Text>
            <p>Designer </p>
          </div>
        </div>
        <div className={styles.chatbox_people_call}>
          <Image src="/assets/voicecall.svg" width={20} height={20} />
          <Image src="/assets/videocall.svg" width={20} height={20} />
        </div>
      </div>
      <hr />
      <div className={styles.chatbox_chat}>
        <div className={styles.chatbox_chat_image}>
          <Image src="/assets/eric.png" width={20} height={20} />
        </div>
        <div className={styles.chatbox_chat_msg}>
          <Text variant="title-10">dummy text of the printing</Text>
        </div>
      </div>
      <div className={styles.chatbox_chat_person2}>
        <div className={styles.chatbox_chat_person2_msg}>
          <Text variant="title-10">dummy text of the printing</Text>
        </div>
      </div>
      <div className={styles.chatbox_send}>
        <div className={styles.chatbox_send_type}>
          <input type="text" placeholder="Type Here" />
          <Image src="/assets/pin.svg" width={20} height={20} />
        </div>
        <div className={styles.chatbox_send_forward}>
          <Image src="/assets/send.svg" width={15} height={15} />
        </div>
      </div>
    </div>
  );
}
