import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function NestedApiResults() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((response) => {
      console.log("Nested API Results");
      console.log(response.data.users);
      setApiData(response.data.users);
    }
    );
  }, []);

  return (
    <div>
      <h1>Nested API Results</h1>
      <table>
        <tr>
          <th>SI no</th>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
        </tr>
        {apiData.map((data, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{`${data.firstName} ${data.lastName}`}</td>
            <td>{data.email}</td>
            <td>
              {Object.entries(data.company).map(([key, value], index) => (
                value.address
              ))}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
