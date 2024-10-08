import styles from "./Button.module.css";

interface Props {
  children: string;
  //   color?: string;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}

const Button = ({ color = "primary", children, onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[styles.btn, styles["btn-" + color]].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
