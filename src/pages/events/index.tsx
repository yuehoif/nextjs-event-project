import EventList from "@/components/event/event-list";
import EventSearch from "@/components/event/event-search";
import { getAllEvents } from "@/dummy-data";

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <>
      <EventSearch />
      <EventList events={events} />
    </>
  );
}
