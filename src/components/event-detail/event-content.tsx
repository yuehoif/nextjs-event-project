import styles from "./event-content.module.css";

export type EventContentProps = {
  children?: React.ReactNode;
};

const EventContent = ({ children }: EventContentProps) => {
  return <section className={styles.content}>{children}</section>;
};

export default EventContent;
