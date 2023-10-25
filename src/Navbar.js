import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Brizzy Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};
