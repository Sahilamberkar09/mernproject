import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const token = storedUser?.token;
  const isAdmin = storedUser?.isAdmin;

  const dataFetch = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/users/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

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
  }, []);

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
