import wallpaper from "../assets/welcome_wallpaper.jpg";
import { useNavigate } from "react-router-dom";
import { useState, type SubmitEvent } from "react";
import { login } from "../api/auth";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await login({ email, password });
      setUser({
        user_id: result.user_id,
        name: result.name ?? "",
        email: result.email ?? ""
      });
      navigate(`/dashboard/${result.user_id}`);
    } catch (err) {
      alert(`Login Failed: ${err}`);
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div
        className="h-screen w-[35%] flex flex-col items-center justify-center px-8 shadow-2xl"
        style={{ background: "var(--color-surface)" }}
      >
        <h1
          className="text-4xl font-bold mb-3 text-center"
          style={{ color: "var(--color-ink)" }}
        >
          Welcome Back
        </h1>

        <p
          className="text-base mb-10 text-center"
          style={{ color: "var(--color-ink)" }}
        >
          Log in to continue planning your trips
        </p>

        <form onSubmit={handleSubmit} className="w-75 flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-full border-2 outline-none"
            style={{ borderColor: "var(--color-accent)", color: "var(--color-ink)" }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-full border-2 outline-none"
            style={{ borderColor: "var(--color-accent)", color: "var(--color-ink)" }}
          />

          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-full font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            Login
          </button>
        </form>

        <p className="text-sm mt-6" style={{ color: "var(--color-ink)" }}>
          Don't have an account?{" "}
          <span
            className="font-semibold cursor-pointer"
            style={{ color: "var(--color-accent)" }}
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;