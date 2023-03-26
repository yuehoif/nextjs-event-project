import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";

import { getEventById, getEventPaths } from "@/utils";
import { Event } from "@/types";

export type EventDetailPageProps = {
  event: Event;
};

export default function EventDetailPage({ event }: EventDetailPageProps) {
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

interface Params extends ParsedUrlQuery {
  eventId: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getEventPaths();

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { eventId } = params as Params;
  const event = await getEventById(eventId);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event,
    },
    revalidate: 60,
  };
};
