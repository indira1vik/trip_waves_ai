import type { Place } from "../types/trip";

interface PlaceCardProps {
    place: Place;
}

export default function PlaceCard({ place }: PlaceCardProps) {
    return (
        <div
            className="overflow-hidden rounded-xl"
            style={{ background: "var(--color-surface)" }}
        >
            {/* Header image */}
            <div className="h-30 w-full overflow-hidden">
                <img
                    src={place.thumbnail}
                    alt={place.title}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-3">
                {/* Title */}
                <div>
                    <p
                        className="text-lg font-bold capitalize"
                        style={{ color: "var(--color-ink)" }}
                    >
                        {place.title}
                    </p>
                </div>

                {/* Rating & reviews */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-medium border w-fit py-1 px-2 rounded-md">
                        Rating: {place.rating}
                    </div>

                    <p
                        className="opacity-60"
                        style={{ color: "var(--color-ink)" }}
                    >
                        {place.reviews.toLocaleString()} reviews
                    </p>
                </div>

                {/* Description */}
                {place.description && (
                    <div>
                        <p
                            className="font-semibold mb-1"
                            style={{ color: "var(--color-ink)" }}
                        >
                            About
                        </p>

                        <p
                            className="opacity-60 line-clamp-3"
                            style={{ color: "var(--color-ink)" }}
                        >
                            {place.description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}