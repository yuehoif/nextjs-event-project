import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

import EventList from "@/components/event/event-list";
import ResultsTitle from "@/components/event/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/utils";
import { Event } from "@/types";

export type FilteredEventsPageProps = {
  events: Event[];
  date: string;
  error?: FilteredEventsPageError;
};

export enum FilteredEventsPageError {
  InvalidFilter = "InvalidFilter",
  NoEventsFound = "NoEventsFound",
}

interface Params extends ParsedUrlQuery {
  slug: string[];
}

export default function FilteredEventsPage({
  events,
  date,
  error,
}: FilteredEventsPageProps) {
  if (error && error === FilteredEventsPageError.InvalidFilter) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  if (error && error === FilteredEventsPageError.NoEventsFound) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  return (
    <>
      <ResultsTitle date={JSON.parse(date)} />
      <EventList events={events} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const {
    slug: [year, month],
  } = params as Params;

  const numYear = Number(year);
  const numMonth = Number(month);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        error: FilteredEventsPageError.InvalidFilter,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: Number(year),
    month: Number(month),
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return {
      props: {
        error: FilteredEventsPageError.NoEventsFound,
      },
    };
  }

  return {
    props: {
      events: filteredEvents,
      date: JSON.stringify(new Date(numYear, numMonth - 1)),
    },
  };
};
