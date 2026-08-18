import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { getHistory } from "../api/trip";
import type { TripResult } from "../types/trip";

const avatarUrl = "https://static.vecteezy.com/system/resources/previews/060/605/418/non_2x/default-avatar-profile-icon-social-media-user-free-vector.jpg";

function DashboardSidebar({ refreshKey }: { refreshKey?: number }) {
    const navigate = useNavigate();
    const { userId } = useParams();
    const { user, setUser } = useAuth();
    const [trips, setTrips] = useState<TripResult[]>([]);

    useEffect(() => {
        if (!userId) return;
        getHistory(Number(userId)).then(setTrips);
    }, [userId, refreshKey]);

    const handleLogout = () => {
        setUser(null);
        navigate("/login");
    };

    return (
        <aside
            className="h-screen w-[25%] flex flex-col"
            style={{ background: "var(--color-surface)" }}
        >
            <div className="flex-1 overflow-y-auto px-6 py-6">
                <h2
                    className="text-lg font-bold mb-4 text-center"
                    style={{ color: "var(--color-ink)" }}
                >
                    Saved Plans
                </h2>

                <div className="flex flex-col gap-2">
                    {[...trips]
                        .sort((a, b) => b.id - a.id)
                        .map((trip) => (
                            <div
                                key={trip.id}
                                className="px-6 py-2 rounded-xl cursor-pointer border-2"
                                style={{ borderColor: "var(--color-ink)" }}
                                onClick={() => navigate(`/dashboard/${userId}/trip/${trip.id}`)}
                            >
                                <p
                                    className="font-semibold"
                                    style={{ color: "var(--color-ink)" }}
                                >
                                    {trip.origin} - {trip.destination}
                                </p>
                                <p className="text-sm opacity-60" style={{ color: "var(--color-ink)" }}>
                                    {trip.start_date} to {trip.end_date}
                                </p>
                            </div>
                        ))}
                </div>
            </div>

            <div className="border-t" style={{ borderColor: "var(--color-ink)" }} />

            <div className="flex items-center justify-between gap-3 px-6 py-4">
                <div className="flex items-center gap-3 cursor-pointer overflow-hidden">
                    <img
                        src={avatarUrl}
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col overflow-hidden">
                        <span
                            className="font-semibold truncate capitalize"
                            style={{ color: "var(--color-ink)" }}
                        >
                            {user?.name}
                        </span>
                        <span
                            className="text-sm opacity-60 truncate"
                            style={{ color: "var(--color-ink)" }}
                        >
                            {user?.email}
                        </span>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="text-sm font-semibold shrink-0 cursor-pointer"
                    style={{ color: "var(--color-ink)" }}
                >
                    Logout
                </button>
            </div>
        </aside>
    );
}

export default DashboardSidebar;