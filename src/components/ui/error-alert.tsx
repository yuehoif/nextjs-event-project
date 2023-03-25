import styles from "./error-alert.module.css";

export type ErrorAlertProps = {
  children: React.ReactNode;
};

const ErrorAlert = ({ children }: ErrorAlertProps) => {
  return <div className={styles.alert}>{children}</div>;
};

export default ErrorAlert;
