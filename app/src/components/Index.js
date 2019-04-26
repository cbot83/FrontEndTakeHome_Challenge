// @ts-check
import * as React from "react";
import axios from "axios";

import { List, Page } from "../styledComponents/index";

export default class Index extends React.Component {
  state = {
    stations: []
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/api/v1/stations`).then(res => {
      const stations = res.data.data;
      this.setState({ stations });
      console.log("stations in index", stations);
    });
  }

  render() {
    return (
      <Page>
        <List>
          {this.state.stations.map(station => (
            <li key={station.id}>
              {/* Popularity: {station.popularity}<br /> */}
              <img alt={station.name} src={station.imgUrl} />
              <br />
              {station.name}
              <br />
              <audio controls>
                <source src={station.streamUrl} />
              </audio>
            
              {/* Reliability: {station.reliability}<br />
            Tags: {station.tags} */}

              <br />
              <br />
            </li>
          ))}
        </List>
      </Page>
    );
  }
}
