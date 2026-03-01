


// // import { useNavigate } from "react-router-dom";
// // import AppLayout from "../layouts/AppLayout";

// // export default function ExecutiveDashboard() {
// //   const navigate = useNavigate();

// //   return (
// //     <AppLayout 
// //       title="Attendance & Monthly Expenses" 
// //       backTo="/login"
// //     >
// //       {/* Main Container */}
// //       <div className="flex justify-center items-center min-h-[calc(100vh-120px)]">
// //         <div className="bg-white/50 p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center w-full max-w-3xl">

// //           {/* Two-column layout */}
// //           <div className="flex flex-col md:flex-row justify-between w-full gap-6 md:gap-12">

// //             {/* Left Side */}
// //             <div className="flex flex-col gap-4 flex-1 items-center">
// //               <button
// //                 className={primaryButtonClass}
// //                 onClick={() => navigate("/field-work")}
// //               >
// //                 🟩 Field Work
// //               </button>

// //               <button className={primaryButtonClass}>
// //                 🟨 Non-Field Work
// //               </button>

// //               <button className={primaryButtonClass}>
// //                 🟥 Non-Working Day
// //               </button>

// //               <button className={primaryButtonClass}>
// //                 Add Other Expenses
// //               </button>
// //             </div>

// //             {/* Right Side */}
// //             <div className="flex flex-col gap-4 flex-1 items-center">
// //               <button className={secondaryButtonClass}>
// //                 View Submitted Expenses
// //               </button>

// //               <button className={secondaryButtonClass}>
// //                 SRC
// //               </button>
// //             </div>

// //           </div>
// //         </div>
// //       </div>
// //     </AppLayout>
// //   );
// // }


// // const primaryButtonClass =
// //   "bg-[#2C3E65] text-white px-5 py-3 rounded-md text-lg font-semibold hover:bg-[#00a6c2] transition w-full sm:w-[200px]";

// // const secondaryButtonClass =
// //   "bg-gray-100 text-[#2C3E65] border border-[#2C3E65] px-5 py-3 rounded-md text-lg font-semibold hover:bg-[#e0e0e0] transition w-full sm:w-[220px]";






// import { useNavigate } from "react-router-dom";
// import AppLayout from "../layouts/AppLayout";

// export default function ExecutiveDashboard() {
//   const navigate = useNavigate();

//   return (
//     <AppLayout 
//       title="Attendance & Monthly Expenses" 
//       backTo="/login"
//     >
//       {/* Main Container */}
//       <div className="flex justify-center items-center min-h-[calc(100vh-120px)]">
//         <div className="bg-white/50 p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center w-full max-w-3xl">

//           {/* Two-column layout */}
//           <div className="flex flex-col md:flex-row justify-between w-full gap-6 md:gap-12">

//             {/* Left Side */}
//             <div className="flex flex-col gap-4 flex-1 items-center">
//               <button
//                 className={primaryButtonClass}
//                 onClick={() => navigate("/fw")}
//               >
//                 🟩 Field Work
//               </button>

//               <button 
//               className={primaryButtonClass}
//               onClick={() => navigate("/nfw")}
//               >
//                 🟨 Non-Field Work
//               </button>

//               <button 
//               className={primaryButtonClass}
//                 onClick={() => navigate("/nw")}
//                 >
//                 🟥 Non-Working Day
//               </button>

//               <button 
//               className={primaryButtonClass}
//               onClick={() => navigate("/otherexpense")}

//               >
//                 Add Other Expenses
//               </button>

              
//             </div>

//             {/* Right Side */}
//             <div className="flex flex-col gap-4 flex-1 items-center">
//               <button className={secondaryButtonClass}
//                               onClick={() => navigate("/my-expenses")}
//                               >

//                 View Submitted Expenses
//               </button>

//               <button 
//               className={secondaryButtonClass}
//               onClick={() => navigate("/my-src")}
// >
//                 SRC
//               </button>
//               {/* NEW Mapping Button */}
//               <button
//                 className={secondaryButtonClass}
//                 onClick={() => navigate("/mapping")}
//               >
//                 Mapping
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </AppLayout>
//   );
// }

// const primaryButtonClass =
//   "bg-[#2C3E65] text-white px-5 py-3 rounded-md text-lg font-semibold hover:bg-[#00a6c2] transition w-full sm:w-[200px]";

// const secondaryButtonClass =
//   "bg-gray-100 text-[#2C3E65] border border-[#2C3E65] px-5 py-3 rounded-md text-lg font-semibold hover:bg-[#e0e0e0] transition w-full sm:w-[220px]";










import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import axios from "../utils/axios";
import { useAuth } from "../context/AuthContext";

export default function ExecutiveDashboard() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [announcementMessage, setAnnouncementMessage] = useState("");
  const [announcementVersion, setAnnouncementVersion] = useState(null);
  const [ackLoading, setAckLoading] = useState(false);
  const { user } = useAuth();

const backRoute =
  user?.role === "manager" || user?.role === "admin"
    ? "/admin-dashboard"
    : null;

  useEffect(() => {
    checkAnnouncement();
  }, []);

  const checkAnnouncement = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get("/announcement/check");

      if (data.show) {
        setShowAnnouncement(true);
        setAnnouncementMessage(data.message);
        setAnnouncementVersion(data.version);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("company");
  navigate("/login");
};

  const handleAcknowledge = async () => {
    try {
      setAckLoading(true);

      await axios.post("/announcement/ack", {
        version: announcementVersion,
      });

      setShowAnnouncement(false);
    } catch (err) {
      console.error(err);
    } finally {
      setAckLoading(false);
    }
  };

  if (loading) {
    return (
      <AppLayout
        title="Attendance & Monthly Expenses"
        backTo="/login"
      >
        <div className="flex justify-center items-center h-[70vh] text-xl font-semibold">
          Loading...
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout
  title="Attendance & Monthly Expenses"
  backTo={backRoute || undefined}
>

  {/* Top Header Bar */}
<div className="flex justify-between items-center px-1 pt-1">

  <div>
    <div className="text-xl text-slate-600 mt-1">
      Logged in as: <span className="font-semibold">
        {user?.username} ({user?.userId})
        </span>
    </div>
    
  </div>

  <button
    onClick={handleLogout}
    className="bg-red-700 text-white px-5 py-2 rounded-lg shadow"
  >
    Logout
  </button>

</div>

      {/* Announcement Modal */}
      {showAnnouncement && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg w-[450px] text-center">
            <h2 className="text-xl font-semibold mb-4">
              📢 Announcement
            </h2>

            <p className="mb-6 text-gray-700 whitespace-pre-line">
              {announcementMessage}
            </p>

            <button
              onClick={handleAcknowledge}
              disabled={ackLoading}
              className="bg-[#2C3E65] text-white px-6 py-2 rounded-md"
            >
              {ackLoading ? "Submitting..." : "Note Taken"}
            </button>
          </div>
        </div>
      )}

      {/* Main Container */}
      {!showAnnouncement && (
        <div className="flex justify-center items-center min-h-[calc(100vh-120px)]">
          <div className="bg-white/50 p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center w-full max-w-3xl">

            {/* Two-column layout */}
            <div className="flex flex-col md:flex-row justify-between w-full gap-6 md:gap-12">

              {/* Left Side */}
              <div className="flex flex-col gap-4 flex-1 items-center">
                <button
                  className={primaryButtonClass}
                  onClick={() => navigate("/fw")}
                >
                  🟩 Field Work
                </button>

                <button
                  className={primaryButtonClass}
                  onClick={() => navigate("/nfw")}
                >
                  🟨 Non-Field Work
                </button>

                <button
                  className={primaryButtonClass}
                  onClick={() => navigate("/nw")}
                >
                  🟥 Non-Working Day
                </button>

                <button
                  className={primaryButtonClass}
                  onClick={() => navigate("/otherexpense")}
                >
                  Add Other Expenses
                </button>
              </div>

              {/* Right Side */}
              <div className="flex flex-col gap-4 flex-1 items-center">
                <button
                  className={secondaryButtonClass}
                  onClick={() => navigate("/my-expenses")}
                >
                  View Submitted Expenses
                </button>

                <button
                  className={secondaryButtonClass}
                  onClick={() => navigate("/my-src")}
                >
                  SRC
                </button>

                <button
                  className={secondaryButtonClass}
                  onClick={() => navigate("/mapping")}
                >
                  Mapping
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}

const primaryButtonClass =
  "bg-[#2C3E65] text-white px-5 py-3 rounded-md text-lg font-semibold hover:bg-[#00a6c2] transition w-full sm:w-[200px]";

const secondaryButtonClass =
  "bg-gray-100 text-[#2C3E65] border border-[#2C3E65] px-5 py-3 rounded-md text-lg font-semibold hover:bg-[#e0e0e0] transition w-full sm:w-[220px]";