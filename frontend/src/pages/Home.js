// import React from "react";
// import FetchUsers from "../components/FetchUsers";

// const Home = ({ user, onLogout }) => {
//   return (
//     <div>
//       <FetchUsers />
//     </div>
//   );
// };

// export default Home;

import Admin from "./Admin.js";

function Home({ user }) {
  return <div>{user?.isAdmin && <Admin user={user} />}</div>;
}

export default Home;
