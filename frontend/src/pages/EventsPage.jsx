import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          {allEvents && allEvents.length === 0 ? (
            <h1 className="text-center w-full pb-[100px] text-[20px]">
              No events Found!
            </h1>
          ) : (
            <EventCard active={true} data={allEvents && allEvents[0]} />
          )}
        </div>
      )}
    </>
  );
};

export default EventsPage;
