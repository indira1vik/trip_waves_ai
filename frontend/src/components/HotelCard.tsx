import type { Hotel } from "../types/trip";
import emptyImagePlaceholder from "../assets/empty_image_placeholder.jpg";

interface HotelCardProps {
    hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
    return (
        <div
            className="overflow-hidden rounded-xl"
            style={{ background: "var(--color-surface)" }}
        >
            {/* Header image */}
            <div className="h-30 w-full overflow-hidden">
                <img
                    src={hotel.thumbnail || emptyImagePlaceholder}
                    alt={hotel.name}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-3">
                {/* Name */}
                <div>
                    <p
                        className="text-lg font-bold capitalize"
                        style={{ color: "var(--color-ink)" }}
                    >
                        {hotel.name}
                    </p>

                    <p
                        className="opacity-60 capitalize"
                        style={{ color: "var(--color-ink)" }}
                    >
                        {hotel.type}
                    </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 font-medium border w-fit py-1 px-2 rounded-md">
                    Rating: {hotel.location_rating}
                </div>

                {/* Essential information */}
                {hotel.essential_info.length > 0 && (
                    <div>
                        <p
                            className="font-semibold mb-1"
                            style={{ color: "var(--color-ink)" }}
                        >
                            Information
                        </p>

                        <p
                            className="opacity-60"
                            style={{ color: "var(--color-ink)" }}
                        >
                            {hotel.essential_info.join(", ")}
                        </p>
                    </div>
                )}

                {/* Amenities */}
                {hotel.amenities.length > 0 && <div>
                    <p
                        className="font-semibold mb-1"
                        style={{ color: "var(--color-ink)" }}
                    >
                        Amenities
                    </p>
                    <p
                        className="opacity-60"
                        style={{ color: "var(--color-ink)" }}
                    >
                        {hotel.amenities.join(", ")}
                    </p>
                </div>}

                {/* Price */}
                <div className="flex items-end justify-between mt-2">
                    <div>
                        <p
                            className="text-lg font-bold"
                            style={{ color: "var(--color-ink)" }}
                        >
                            {hotel.rate_per_night}
                            <span className="font-normal opacity-60">
                                {" "} / night
                            </span>
                        </p>
                    </div>
                    <p
                        className="opacity-60"
                        style={{ color: "var(--color-ink)" }}
                    >
                        {hotel.total_rate} total
                    </p>
                </div>
            </div>
        </div>
    );
}