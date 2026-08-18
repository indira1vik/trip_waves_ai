import wallpaper from "../assets/welcome_wallpaper.jpg";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="h-screen w-[35%] flex flex-col items-center justify-center px-8 shadow-2xl" style={{ background: "var(--color-surface)" }}>
        <h1
          className="text-4xl font-bold mb-3 text-center"
          style={{ color: "var(--color-ink)" }}
        >
          TripWaves
        </h1>

        <p
          className="text-base mb-10 text-center"
          style={{ color: "var(--color-ink)" }}
        >
          Plan your next adventure with AI
        </p>

        <button
          onClick={() => navigate("/login")}
          className="w-75 py-3 mb-4 rounded-full font-semibold text-white transition hover:opacity-90"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="w-75 py-3 rounded-full font-semibold border-2 transition hover:bg-gray-50"
          style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;