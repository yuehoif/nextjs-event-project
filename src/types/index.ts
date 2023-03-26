export type Event = {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
  description: string;
};

export type Events = Event[];
