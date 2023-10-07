import TextSearch from "./TextSearch";
// import "./style.css";
const Nearby = (props) => {
  // const [lat, setLat] = useState([]);
  // const setLatAndLink = (lat) => {
  //     setLat(lat)
  // }

  // const [lon, setLon] = useState([]);
  // const setLonAndLink = (lon) => {
  //     setLon(lon)
  // }

  return (
    <div className="googleSearch">
      <div className="googleSearchInfo">
        <h1>SEARCH FOR A PLACE </h1> <hr />
        <h2>Search by name, location, type, and/or keyword.</h2>
      </div>

      <div className="googleSearchForm">
        <TextSearch />
      </div>
    </div>
  );
};

export default Nearby;
