import React, { useEffect, useState } from "react";
import { getPercentagesRequest } from "../services/percentages.service";
import PercentagesPieChart from "./PercentagesPieChart";

function Percentages({ courseId }) {
  console.log(courseId);
  const [percentages, setPercentages] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getPercent() {
      try {
        if (courseId) {
          const resp = await getPercentagesRequest(courseId);
          if (resp.data?.length > 0) {
            console.log('getPercentages', resp.data);
            setPercentages(resp.data);
          } else {
            setPercentages([]);
          }
        }
      } catch (error) {
        setError(error);
      }
    }
    getPercent();
  }, [courseId]);
  return (
    <>
      {error && <div className="bg-red-700">{error}</div>}
      {(percentages.length > 0) &&
      <div className="effect p-6">
        <PercentagesPieChart percentages={percentages}></PercentagesPieChart>
      </div>}
    </>
  );
}

export default Percentages;
