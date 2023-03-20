import styles from "./logistics-item.module.css";

export type LogisticsItemProps = {
  icon: React.ComponentType;
  children: React.ReactNode;
};

function LogisticsItem({ icon: Icon, children }: LogisticsItemProps) {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
