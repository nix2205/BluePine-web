import bluepineLogo from "../utils/bluepine.png";

export default function LoginLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      
      {/* Header */}
      <header className="bg-[#1f3a5f] text-white text-center py-4 text-xl font-semibold">
        Login
      </header>

      {/* Body */}
      <main className="flex flex-1 items-center justify-center">
        <div className="bg-white shadow-xl rounded-xl p-8 w-[380px]">
          
          <div className="flex justify-center mb-6">
            <img
              src={bluepineLogo}
              alt="BluePine"
              className="h-20 w-20 rounded-full border-2 border-slate-300"
            />
          </div>

          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1f3a5f] text-white text-center py-3">
        © 2026 BluePine
      </footer>
    </div>
  );
}
