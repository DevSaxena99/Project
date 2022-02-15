import React, {useEffect,useState} from "react";
import StateInfo from "./stateinfo";
import {Link} from "react-router-dom";


function Table(props) {

  const [info,setInfo] = useState();
  const showDetails = () => {

    const statecode = props.state.toLowerCase();

    const url = "https://api.covidtracking.com/v1/states/"+statecode+"/info.json";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

  }

  return (
    <tbody>
      <tr>
        <th>{props.state}</th>
        <th>{props.positive}</th>
        <th>{props.negative} </th>
        <th>{props.death}</th>
        <th><Link className="anchor" to={`${props.state}`}>View Details</Link></th>
      </tr>
    </tbody>
  );

}

export default Table;
