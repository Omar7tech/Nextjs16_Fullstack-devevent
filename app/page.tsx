import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { time } from "console";
import React from "react";
import  events  from "@/lib/constants";

function page() {
  return (
    <section>
      <h1 className="text-center">
        The Hub For Every Dev <br /> Event You Can&apos;t Miss
      </h1>
      <p className="text-center mt-5">
        Hackathoons , Meetups , and Conferences , All in One Place.
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default page;
