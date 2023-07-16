import styles from "./listItem.module.scss";

export default function ListItem({ values }) {
  return (
    <ul className={styles.listStyle}>
      {values?.map((obj, i) => (
        <li key={i} className={styles.listStyle_itemList}>
          {obj}
        </li>
      ))}
    </ul>
  );
}
