import EventList from "@/components/event/event-list";

import { Events } from "@/types";
import { getFeaturedEvents } from "@/utils";

export type EventListProps = {
  featuredEvents: Events;
};

export default function Home({ featuredEvents }: EventListProps) {
  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 60,
  };
};
