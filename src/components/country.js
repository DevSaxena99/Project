import React, {useEffect,useState} from "react";

function Country() {

  const [info,setInfo] = useState({});
  const [obj,setObj] = useState();

  useEffect(() => {
    const url = "https://api.covidtracking.com/v1/us/daily.json"
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setInfo({
          positive: data[0].positive,
          negative: data[0].negative,
          death: data[0].death,
          totalTestResultsIncrease: data[0].totalTestResultsIncrease
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
    <table>
    <thead>
    <th>Country: </th>
      <th>Active: </th>
      <th>Recovered: </th>
      <th>Death: </th>
      <th>Increase: </th>
    </thead>
    <tbody>
    <tr>
      <th>US</th>
      <th>{info.positive}</th>
      <th>{info.negative}</th>
      <th>{info.death}</th>
      <th>{info.totalTestResultsIncrease}</th>
    </tr>
    </tbody>
    </table>
    </div>
  );
}

export default Country;
