import { GetStaticProps } from "next";

import EventList from "@/components/event/event-list";
import EventSearch from "@/components/event/event-search";

import { getAllEvents } from "@/utils";
import { Event } from "@/types";

export type EventsPageProps = {
  events: Event[];
};

export default function EventsPage({ events }: EventsPageProps) {
  return (
    <>
      <EventSearch />
      <EventList events={events} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};
