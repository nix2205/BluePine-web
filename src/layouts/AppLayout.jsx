
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AppLayout({ title, backTo, children }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const logoUrl = user?.company?.logoUrl
    ? `${SERVER_URL}/${user.company.logoUrl}`
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      
      {/* Header */}
      <header className="bg-[#1f3a5f] text-white px-6 py-4 shadow-md">
        <div className="relative flex items-center justify-between">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            {logoUrl && (
              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                <img
                  src={logoUrl}
                  alt="Company Logo"
                  className="h-12 w-12 rounded-full object-cover bg-white p-1"
                />
              </div>
            )}
          </div>

          {/* Center: Title */}
          <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold">
            {title}
          </h1>

          {/* Right: Back button */}
          {backTo && (
            <button
              onClick={() => navigate(backTo)}
              className="bg-white text-[#1f3a5f] px-4 py-1 rounded-lg font-medium"
            >
              ← Back
            </button>
          )}
        </div>
      </header>

      {/* Body */}
      <main className="flex-1 p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1f3a5f] text-white text-center py-3">
        © 2026 BluePine
      </footer>
    </div>
  );
}
