import { useState } from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import TripSearchBar from "../components/TripSearchBar";
import TripResults from "../components/TripResults";
import type { TripResult } from "../types/trip";
import { planTrip, saveTrip } from "../api/trip";
import { useAuth } from "../context/AuthContext";
import { OrbitProgress } from "react-loading-indicators";

function DashboardPage() {
  const [result, setResult] = useState<TripResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const { user } = useAuth();

  const handlePlan = async (prompt: string) => {
    setIsLoading(true);
    setResult(null);
    try {
      const data = await planTrip(prompt);
      setResult(data);
    } catch (err) {
      console.error("Trip planning failed", err);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSave = async () => {
    if (!result || !user) return;
    try {
      await saveTrip(result, user.user_id);
      setRefresh((prev) => prev + 1);
      setResult(null);
    } catch (err) {
      console.error("Save failed", err);
    }
  }

  return (
    <div className="h-screen w-full flex">
      <DashboardSidebar refreshKey={refresh} />

      <main className="flex-1 flex flex-col items-center px-12 py-10 overflow-y-auto">
        <div className="w-full">
          <TripSearchBar onPromptSubmit={handlePlan} />

          {isLoading && (
            <div className="flex items-center justify-center mt-10">
              <OrbitProgress
                variant="spokes"
                color="var(--color-accent)"
                size="medium"
                text=""
                textColor=""
              />
            </div>
          )}

          {result && <TripResults result={result} onSave={handleSave} />}
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;