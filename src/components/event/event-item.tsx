import Link from "next/link";
import Image from "next/image";

import { Event } from "@/dummy-data";
import styles from "./event-item.module.css";

type EventItemProps = {
  event: Event;
};

export default function EventItem({ event }: EventItemProps) {
  const { id, title, date, location, image } = event;

  const route = {
    pathname: "/events/[id]",
    query: { id: id },
  };

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  return (
    <li className={styles.item}>
      <Image src={`/${image}`} width="0" height="0" sizes="100vw" alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={route}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
