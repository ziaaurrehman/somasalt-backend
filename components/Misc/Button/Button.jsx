import styles from "./button.module.scss";

export default function Button({
  variant,
  variantType = "",
  className = "",
  children,
}) {
  if (variant) {
    return (
      <button
        className={`${styles.button}${variant && " " + styles[variant]}${
          className && " " + className
        }`}
      >
        {children}
      </button>
    );
  }
  return (
    <button className={`${styles.button}${className && " " + className}`}>
      {children}
    </button>
  );
}
