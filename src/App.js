// // // import Login from "./pages/Login";
// // // import Dummy from "./pages/Dummy";

// // // function App() {
// // //   const isLoggedIn = true; // TEMPORARY toggle

// // //   return isLoggedIn ? <Dummy /> : <Login />;
// // // }

// // // export default App;


// // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // import { useAuth } from "./context/AuthContext";
// // import Login from "./pages/Login";
// // import Dummy from "./pages/Dummy";

// // function App() {
// //   const { token } = useAuth();

// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         {/* Login */}
// //         <Route
// //           path="/login"
// //           element={!token ? <Login /> : <Navigate to="/dashboard" />}
// //         />

// //         {/* Dummy dashboard */}
// //         <Route
// //           path="/dashboard"
// //           element={token ? <Dummy /> : <Navigate to="/login" />}
// //         />

// //         {/* Default route */}
// //         <Route
// //           path="*"
// //           element={<Navigate to={token ? "/dashboard" : "/login"} />}
// //         />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;




// import { Routes, Route, Navigate } from "react-router-dom";
// import { useAuth } from "./context/AuthContext";

// import Login from "./pages/Login";
// import Dummy from "./pages/Dashboard";
// import AddUser from "./pages/AddUser";
// import SrcPage from "./pages/SrcPage";
// import AdminExpenseStatementPage from "./pages/AdminExpenseStatementPage";
// import ExecutiveDashboard from "./pages/ExecutiveDashboard";
// import MappingPage from "./pages/MappingPage";
// import FWPage from "./pages/FieldWorkPage";
// import NFWPage from "./pages/NFWPage";
// import NWPage from "./pages/NWPage";
// import OtherExpensePage from "./pages/OtherExpensePage";
// import MySRCPage from "./pages/userSRCPage";
// import AdminExpenseViewerPage from "./pages/AdminExpenseViewerPage";



// function App() {
//   const { user } = useAuth();

//   return (
//     <Routes>
//       {/* Login */}
//       <Route
//         path="/login"
//   element={<Login />}
//       />

//       {/* Dashboard */}
//       <Route
//         path="/dashboard"
//         element={user ? <Dummy /> : <Navigate to="/login" replace />}
//       />

//       {/* Add User */}
//       <Route
//         path="/add-user"
//         element={user ? <AddUser /> : <Navigate to="/login" replace />}
//       />

//       {/* Default */}
//       <Route
//         path="*"
//         element={<Navigate to={user ? "/dashboard" : "/login"} replace />}
//       />

//       <Route
//   path="/admin/expenses/:username"
//   element={user ? <AdminExpenseViewerPage /> : <Navigate to="/login" replace />}
// />


//       {/* <Route
//   path="/admin/expenses/:userId"
//   element={<AdminExpenseStatementPage />}
// /> */}



//       <Route path="/src/:userId" element={<SrcPage />} />

//       <Route path="/executive-dashboard" element={<ExecutiveDashboard />} />
//       <Route path="/mapping" element={<MappingPage />} />
//       <Route path="/fw" element={<FWPage />} />
//       <Route path="/nfw" element={<NFWPage />} />

//       <Route path="/nw" element={<NWPage />} />
//       <Route path="/otherexpense" element={<OtherExpensePage />} />
//       <Route path="/my-src" element={<MySRCPage />} />






//     </Routes>
//   );
// }

// export default App;








import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddUser from "./pages/AddUser";
import SrcPage from "./pages/SrcPage";
import AdminExpenseViewerPage from "./pages/AdminExpenseViewerPage";
import ExecutiveDashboard from "./pages/ExecutiveDashboard";
import MappingPage from "./pages/MappingPage";
import FWPage from "./pages/FieldWorkPage";
import NFWPage from "./pages/NFWPage";
import NWPage from "./pages/NWPage";
import OtherExpensePage from "./pages/OtherExpensePage";
import MySRCPage from "./pages/userSRCPage";
import UserExpenseViewerPage from "./pages/UserExpenseViewerPage";


function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/login" replace />}
      />

      <Route
        path="/add-user"
        element={user ? <AddUser /> : <Navigate to="/login" replace />}
      />

      {/* ✅ FIXED HERE */}
      <Route
        path="/admin/expenses/:userId"
        element={user ? <AdminExpenseViewerPage /> : <Navigate to="/login" replace />}
      />

      <Route path="/src/:userId" element={<SrcPage />} />

      <Route path="/executive-dashboard" element={<ExecutiveDashboard />} />
      <Route path="/mapping" element={<MappingPage />} />
      <Route path="/fw" element={<FWPage />} />
      <Route path="/nfw" element={<NFWPage />} />
      <Route path="/nw" element={<NWPage />} />
      <Route path="/otherexpense" element={<OtherExpensePage />} />
      <Route path="/my-src" element={<MySRCPage />} />
      <Route
  path="/my-expenses"
  element={
    
      <UserExpenseViewerPage />
   
  }
/>


      <Route
        path="*"
        element={<Navigate to={user ? "/dashboard" : "/login"} replace />}
      />
    </Routes>
  );
}

export default App;
