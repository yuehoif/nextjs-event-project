import { getFeaturedEvents } from "../dummy-data";
import EventList from "@/components/event-list";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}
