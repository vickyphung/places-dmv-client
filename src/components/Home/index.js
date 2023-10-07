// import "./styles.css";
import { Link } from "react-router-dom";
import Login from "../Login";

function Home(props) {
  console.log("Welcome HOME");
  return (
    <div className="home">
      <h1>PLACES TO GO in DC, Maryland, and Northern Virginia</h1>
      <hr />

      <Link className="" to="/places">
        <h2>➥ View Places To Go</h2>
      </Link>
      <hr />

      <Link className="" to="/search">
        <h2>➥ Search and Add a Place</h2>
      </Link>
      <hr />

      <Login />
    </div>
  );
}
export default Home;
