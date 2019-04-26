import React from 'react';
import axios from 'axios';

export default class StationList extends React.Component {
  state = {
    stations: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/v1/stations`)
      .then(res => {
        const stations = res.data.data;
        this.setState({ stations });
        console.log('stations', stations)
      })
  }

  render() {
    return ( 
      <ul>
        { this.state.stations.map(station => <li>{station.name} {station.popularity}</li>)}
      </ul>
    )
  }
}