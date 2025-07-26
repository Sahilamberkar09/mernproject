import React, { useEffect, useState, useCallback } from "react";
import { axiosInstance } from "../libs/axios";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const token = storedUser?.token;
  const isAdmin = storedUser?.isAdmin;

  const dataFetch = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
    } catch (error) {
      setError(error.message);
    }
  }, [token]); // token is required here because it's used inside dataFetch

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await axiosInstance.delete(`/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        alert("User deleted successfully!");
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to delete user");
    }
  };

  useEffect(() => {
    if (token && isAdmin) {
      dataFetch();
    } else {
      setError("You are not authorized to view this page");
    }
  }, [token, isAdmin, dataFetch]);

  return (
    <div className="p-6">
      <h3 className="text-2xl font-semibold py-4 text-center">Fetch Users</h3>
      {error && <p className="text-red-500">{error}</p>}

      {users.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.map((item) => (
            <div
              key={item._id}
              className="p-4 bg-white shadow rounded-lg flex flex-col justify-between"
            >
              <div>
                <p className="text-lg font-semibold">Name: {item.name}</p>
                <p className="text-gray-700">Email: {item.email}</p>
              </div>
              <button
                onClick={() => deleteUser(item._id)}
                className="mt-4 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No Users available</p>
      )}
    </div>
  );
};

export default FetchUsers;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function FetchUsers() {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState("");

//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   const token = storedUser?.token;
//   const isAdmin = storedUser?.isAdmin;

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("https://localhost:5000/api/users", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setUsers(response.data);
//     } catch (err) {
//       setError(err.response?.data?.message || err.message);
//     }
//   };

//   const deleteUser = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this user?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/users/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setUsers((prev) => prev.filter((u) => u._id !== id));
//     } catch (err) {
//       setError(err.response?.data?.message || err.message);
//     }
//   };

//   useEffect(() => {
//     if (token && isAdmin) {
//       fetchData();
//     } else {
//       setError("You are not authorized to view this page");
//     }
//   }, []);

//   return (
//     <div>
//       <h3>All Users (Admin Only)</h3>
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}
//       <ul>
//         {users.map((user) => (
//           <li key={user._id}>
//             {user.name} ({user.email})
//             {isAdmin && (
//               <button
//                 style={{ marginLeft: "10px" }}
//                 onClick={() => deleteUser(user._id)}
//               >
//                 Delete
//               </button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FetchUsers;
