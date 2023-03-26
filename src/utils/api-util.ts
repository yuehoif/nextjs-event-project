import { Events } from "@/types";

export type EventResponse = {
  [key: string]: {
    id: string;
    title: string;
    location: string;
    date: string;
    image: string;
    description: string;
    isFeatured: boolean;
  };
};

export const getAllEvents = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL!;

  const res = await fetch(apiUrl);
  const data: EventResponse = await res.json();

  const events: Events = Object.keys(data).map((key) => {
    return {
      ...data[key],
    };
  });

  return events;
};

export const getFeaturedEvents = async () => {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
};

export const getEventById = async (id: string) => {
  const events = await getAllEvents();
  const event = events.find((e) => e.id === id);
  return event;
};

export const getEventPaths = async () => {
  const events = await getFeaturedEvents();
  return events.map((event) => ({ params: { eventId: event.id } }));
};
