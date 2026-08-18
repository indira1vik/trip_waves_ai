import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTrip } from "../api/trip";
import type { TripResult } from "../types/trip";
import TripResults from "../components/TripResults";

function SavedTripPage() {
  const { tripId } = useParams();
  const [result, setResult] = useState<TripResult | null>(null);

  useEffect(() => {
    if (!tripId) return;
    getTrip(Number(tripId)).then(setResult);
  }, [tripId]);

  if (!result) return <p>Loading...</p>;

  return (
    <div className="h-screen w-full flex">
      <main className="flex-1 flex flex-col items-center px-12 py-10 overflow-y-auto">
        <div className="w-full">
          <TripResults result={result} showSaveButton={false} />
        </div>
      </main>
    </div>
  );
}

export default SavedTripPage;