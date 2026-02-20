// import LoginLayout from "../layouts/LoginLayout";
// import { useAuth } from "../context/AuthContext";

// export default function Login() {
//   const { setUser } = useAuth();

//   const handleLogin = async () => {
//     // pretend API response
//     const response = {
//       username: "TCadmin",
//       company: {
//         name: "Truchem",
//         logoUrl: "https://your-cdn/truchem-logo.png",
//       },
//     };

//     setUser(response);
//   };

//   return (
//     <LoginLayout>
//       <input className="input" placeholder="Enter Username" />
//       <input className="input mt-3" type="password" placeholder="Enter Password" />

//       <button
//         onClick={handleLogin}
//         className="mt-4 w-full bg-[#1f3a5f] text-white py-2 rounded-lg"
//       >
//         Login
//       </button>
//     </LoginLayout>
//   );
// }


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import LoginLayout from "../layouts/LoginLayout";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { username, password }
//       );

//       const { token, user } = res.data;

//       // 🔐 store auth
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("company", JSON.stringify(user.company));

//       navigate("/dashboard");
//     } catch (err) {
//       alert("Invalid username or password");
//     }
//   };

//   return (
//     <LoginLayout>
//       <form onSubmit={handleLogin} className="space-y-5">
//         <input
//           className="w-full border p-2 rounded"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <input
//           type="password"
//           className="w-full border p-2 rounded"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button className="w-full bg-[#1f3a5f] text-white py-2 rounded">
//           Login
//         </button>
//       </form>
//     </LoginLayout>
//   );
// }





import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import LoginLayout from "../layouts/LoginLayout";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
  `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
  { userId, password }
);

    const user = res.data.user;

    login(user);
    localStorage.setItem("token", res.data.token);

    // 🔥 Role-based navigation
    if (user.role === "executive") {
      navigate("/executive-dashboard");
    } else if (user.role === "admin" || user.role === "manager") {
      navigate("/dashboard"); // your admin dashboard route
    } else {
      navigate("/"); // fallback
    }

  } catch (err) {
    console.error(err);
    alert("Login failed");
  }
};


  return (
    <LoginLayout>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          placeholder="UserId"
          className="w-full border p-2 rounded"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-[#1f3a5f] text-white p-2 rounded">
          Login
        </button>
      </form>
    </LoginLayout>
  );
}
