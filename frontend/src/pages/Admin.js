import React from "react";
import FetchUsers from "../components/FetchUsers.js";

function Admin({ user }) {
  if (!user?.isAdmin) {
    return <p>You are not authorized to view this section</p>;
  }
  return (
    <div className="mt-28">
      <h1 className="text-center font-bold text-3xl">Admin Panel</h1>
      <FetchUsers />
    </div>
  );
}

export default Admin;
