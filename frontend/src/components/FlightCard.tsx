import type { FlightOption } from "../types/trip";

interface FlightCardProps {
    flight: FlightOption;
}

export default function FlightCard({ flight }: FlightCardProps) {
    const upwardHours = Math.floor(flight.upward.total_duration / 60);
    const upwardMins = flight.upward.total_duration % 60;

    const downwardHours = Math.floor(flight.downward.total_duration / 60);
    const downwardMins = flight.downward.total_duration % 60;

    const upward_airports = [
        flight.upward.segments[0]?.departure_airport.id,
        ...flight.upward.segments.map(
            (segment) => segment.arrival_airport.id
        ),
    ];

    const downard_airports = [
        flight.downward.segments[0]?.departure_airport.id,
        ...flight.downward.segments.map(
            (segment) => segment.arrival_airport.id
        ),
    ];

    return (
        <div
            className="p-4 rounded-xl flex flex-col gap-3"
            style={{ background: "var(--color-surface)" }}
        >
            {/* Header */}
            <div className="flex items-center gap-2">
                <img
                    src={flight.upward.airline_logo}
                    alt={flight.upward.segments[0]?.airline}
                    className="w-6 h-6 object-contain"
                />
                <p
                    className="font-semibold text-sm"
                    style={{ color: "var(--color-ink)" }}
                >
                    {flight.upward.segments[0]?.airline}
                </p>
            </div>

            {/* Price */}
            <p
                className="text-lg font-bold border w-fit py-1 px-2 rounded-md"
                style={{ color: "var(--color-ink)" }}
            >
                ${flight.upward.price}
            </p>

            {/* Upward */}
            <div>
                <div className="flex items-center gap-2">
                    {upward_airports.map((airport, index) => (
                        <div key={airport} className="flex items-center gap-2">
                            <span className="font-medium">
                                {airport}
                            </span>

                            {index < upward_airports.length - 1 && (
                                <span className="opacity-40">→</span>
                            )}
                        </div>
                    ))}
                </div>
                <div className="font-medium opacity-60"
                    style={{ color: "var(--color-ink)" }} >
                    {upwardHours}h {upwardMins}m
                </div>
            </div>

            {/* Downward */}
            <div>
                <div className="flex items-center gap-2">
                    {downard_airports.map((airport, index) => (
                        <div key={airport} className="flex items-center gap-2">
                            <span className="font-medium">
                                {airport}
                            </span>

                            {index < downard_airports.length - 1 && (
                                <span className="opacity-40">→</span>
                            )}
                        </div>
                    ))}
                </div>
                <div className="font-medium opacity-60"
                    style={{ color: "var(--color-ink)" }} >
                    {downwardHours}h {downwardMins}m
                </div>
            </div>
        </div>
    );
}