import Link from "next/link";

import styles from "./button.module.css";

export type ButtonProps = {
  link?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ link, onClick, children }: ButtonProps) => {
  if (link) {
    return (
      <Link className={styles.btn} href={link}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
