import { Event } from "../dummy-data";
import EventItem from "./event-item";

import styles from "./event-list.module.css";

type EventListProps = {
  events: Event[];
};

export default function EventList({ events }: EventListProps) {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
