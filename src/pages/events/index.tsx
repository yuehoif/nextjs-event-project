import EventList from "@/components/event/event-list";
import { getAllEvents } from "@/dummy-data";

export default function EventsPage() {
  const events = getAllEvents();

  return <EventList events={events} />;
}
