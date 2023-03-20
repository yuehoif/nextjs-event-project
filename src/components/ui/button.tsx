import Link from "next/link";

import styles from "./button.module.css";

export type ButtonProps = {
  link: string;
  children?: React.ReactNode;
};

const Button = ({ link, children }: ButtonProps) => {
  return (
    <Link className={styles.btn} href={link}>
      {children}
    </Link>
  );
};

export default Button;
