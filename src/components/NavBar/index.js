import "./style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link className="navLink" to="/">Places</Link>
      <Link className="navLink" to="/login">Login/Create Account</Link>
      <Link className="navLink" to="/user">User Info</Link> 
      {/* <Link className="navLink" to="/places">Places </Link> */}
      {/* <Link className="navLink" to="/places/add">Add </Link> */}
      <Link className="navLink" to="/places/filter">Filter</Link>
      <Link className="navLink" to="/search">Search</Link>
      {/* <Link className="navLink" to="/reviews">Reviews</Link> */}
    </div>

  );
}

export default NavBar;
