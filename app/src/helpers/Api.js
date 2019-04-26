// @ts-check
import axios from "axios";

export const allStations = () => {
  axios.get(`http://localhost:8080/api/v1/stations`).then(res => {
    const stations = res.data.data;
    // this.setState({ stations });
    console.log("stations", stations);
  });
};
// axios.get(`http://localhost:8080/api/v1/stations`).then(res => {
//   const stations = res.data.data;
//   this.setState({ stations });
//   console.log("stations", stations);
// });
