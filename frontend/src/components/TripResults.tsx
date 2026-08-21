import type { TripResult } from "../types/trip";
import FlightCard from "./FlightCard";
import HotelCard from "./HotelCard";
import PlaceCard from "./PlaceCard";

interface TripResultsProps {
  result: TripResult;
  showSaveButton?: boolean;
  onSave?: () => void;
}

function TripResults({ result, showSaveButton = true, onSave }: TripResultsProps) {

  const calc_total_time = (up_time: number, down_time: number): string => {
    const total_time: number = up_time + down_time;
    const total_hrs: number = Math.floor(total_time / 60);
    const total_min: number = total_time % 60;
    return `${total_hrs}h ${total_min}m`;
  }

  return (
    <div className="w-full mt-10 flex flex-col gap-10">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1
          className="text-2xl font-bold"
          style={{ color: "var(--color-ink)" }}
        >
          Your Trip Details
        </h1>

        {showSaveButton && <button
          className="px-4 py-2 rounded-lg font-medium cursor-pointer"
          style={{
            background: "var(--color-ink)",
            color: "var(--color-surface)",
          }}
          onClick={onSave}
        >
          Save Trip
        </button>}
      </div>

      <div className="border-t" style={{ borderColor: "var(--color-ink)" }} />

      {/* 1. Summary */}
      <section>
        <h2 className="text-xl font-bold mb-2" style={{ color: "var(--color-ink)" }}>
          Summary
        </h2>
        <div className="p-5 rounded-xl" style={{ background: "var(--color-surface)" }}>
          <p style={{ color: "var(--color-ink)" }}>{result?.summary}</p>
        </div>
      </section>

      {/* 2. Optimized Plan (temporary stand-in: first item of each list) */}
      <section>
        <h2 className="text-xl font-bold mb-2" style={{ color: "var(--color-ink)" }}>
          Optimized Plan
        </h2>

        <div className="p-6 rounded-2xl flex flex-col gap-5" style={{ background: "var(--color-surface)" }}>
          {/* Narrative title + content */}
          <div>
            <h3 className="opacity-60 font-semibold mb-1" style={{ color: "var(--color-ink)" }}>
              Overall Trip Details
            </h3>
            <p style={{ color: "var(--color-ink)" }}>
              {result.optimized_plan?.overall_content}
            </p>
          </div>

          {/* Estimated cost */}
          <div>
            <h3 className="font-semibold mb-1 opacity-60" style={{ color: "var(--color-ink)" }}>
              Estimated Total Cost for Stay and Flight
            </h3>
            <p className="text-2xl font-bold" style={{ color: "var(--color-ink)" }}>
              ${result.optimized_plan?.estimated_total_cost?.toLocaleString() ?? "N/A"}
            </p>
          </div>

          {/* 5 small grids — placeholders for now */}
          <div className="grid grid-cols-5 gap-3">
            <div className="p-3 rounded-md border">
              <p className="text-sm font-semibold opacity-60 mb-1" style={{ color: "var(--color-ink)" }}>
                Cheapest Round Trip Flight
              </p>
              <p>Price: ${result.optimized_plan?.cheapest_flight?.upward?.price}</p>
              <p>Airline: {result.optimized_plan?.cheapest_flight?.upward?.segments[0].airline}</p>
            </div>

            <div className="p-3 rounded-md border">
              <p className="text-sm font-semibold opacity-60 mb-1" style={{ color: "var(--color-ink)" }}>
                Fastest Round trip Flight
              </p>
              <p>
                Total Time: {calc_total_time(
                  result.optimized_plan?.fastest_flight?.upward?.total_duration,
                  result.optimized_plan?.fastest_flight?.downward?.total_duration
                )}
              </p>
              <p>Airline: {result.optimized_plan?.fastest_flight?.upward?.segments[0].airline}</p>
            </div>

            <div className="p-3 rounded-md border">
              <p className="text-sm font-semibold opacity-60 mb-1" style={{ color: "var(--color-ink)" }}>
                Cheapest Hotel to Stay
              </p>
              <p>Price: {result.optimized_plan?.cheapest_hotel?.total_rate}</p>
              <p className="capitalize">Type: {result.optimized_plan?.cheapest_hotel?.type}</p>
            </div>

            <div className="p-3 rounded-md border">
              <p className="text-sm font-semibold opacity-60 mb-1" style={{ color: "var(--color-ink)" }}>
                Best Rated Hotel
              </p>
              <p>Rating: {result.optimized_plan?.best_rated_hotel?.location_rating}</p>
            </div>

            <div className="p-3 rounded-md border">
              <p className="text-sm font-semibold opacity-60 mb-1" style={{ color: "var(--color-ink)" }}>
                Must Visit
              </p>
              <p>Thing to do: {result.optimized_plan?.must_visit_place?.title}</p>
              <p>Rating: {result.optimized_plan?.must_visit_place?.rating}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Top 3 Flights */}
      <section>
        <h2 className="text-xl font-bold mb-3" style={{ color: "var(--color-ink)" }}>
          Top Flights Available
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {result.flights?.map((flight, i) => (
            <FlightCard key={i} flight={flight} />
          ))}
        </div>
      </section>

      {/* 4. Top 3 Hotels */}
      <section>
        <h2 className="text-xl font-bold mb-3" style={{ color: "var(--color-ink)" }}>
          Top Hotels to Stay
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {result.hotels?.map((hotel, i) => (
            <HotelCard key={i} hotel={hotel} />
          ))}
        </div>
      </section>

      {/* 5. Top 6 Places */}
      <section>
        <h2 className="text-xl font-bold mb-3" style={{ color: "var(--color-ink)" }}>
          Top Places to Visit
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {result.places?.map((place, i) => (
            <PlaceCard key={i} place={place} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default TripResults;