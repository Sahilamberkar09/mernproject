import Admin from "./Admin.js";

function Home({ user }) {
  return <div>{user?.isAdmin && <Admin user={user} />}</div>;
}

export default Home;
