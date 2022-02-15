import React, {useEffect,useState} from "react";
import Table from "./table";

function States() {

  const [info,setInfo] = useState([]);


  useEffect(() => {
    const url = "https://api.covidtracking.com/v1/states/current.json"
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const arr = [];
        const stateData = data.map((data) => {
          arr.push(data);
        })
        setInfo(arr);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

  }, []);

  const showData = info.map((data) => {
    return (
        <Table  key={data.state} state={data.state} positive={data.positive} negative={data.negative} death={data.death} increase={data.totalTestResultsIncrease}/>
    )
  })

  return (
    <table>
    <thead>
    <tr>
      <th>State:</th>
      <th>Active:</th>
      <th>Recovered:</th>
      <th>Death:</th>
      <th>See Details:</th>
    </tr>
    </thead>

      {showData}
    </table>
  );
}

export default States;
