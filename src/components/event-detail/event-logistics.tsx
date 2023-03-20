import Image from "next/image";

import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import styles from "./event-logistics.module.css";

export type EventLogisticsProps = {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
};

function EventLogistics({
  date,
  address,
  image,
  imageAlt,
}: EventLogisticsProps) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const addressText = address.replace(", ", "\n");

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image
          src={`/${image}`}
          alt={imageAlt}
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
