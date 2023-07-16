import Styles from "./checkbox.module.scss";

export default function CheckBox({ content }) {
  return (
    <div>
      <input
        type="checkbox"
        id="myCheckbox"
        checked={true}
        className={Styles.customCheckbox}
      />
      <label for="myCheckbox" className={Styles.checkboxLabel}>
        {content}
      </label>
    </div>
  );
}
