import React, { useEffect, useState } from "react";
import { getPercentagesRequest } from "../services/percentages.service";

function Percentages({ courseId }) {
  console.log(courseId);
  const [percentages, setPercentages] = useState([])
  useEffect(() => {
    async function getPercent(){
      try {
        const resp = await getPercentagesRequest(courseId);
        if(resp.data?.length > 0) {
          setPercentages(resp.data)
        } else {
          setPercentages([])
        }
        console.log('%%%', resp);
      } catch (error) {
        console.error(error);
      }
    };
    getPercent()
  }, [courseId]);
  return <>
    {percentages && percentages.map(percentage => (
      <div key={percentage.percentageId}>{percentage.percentage}</div>
    )

    )}
  </>;
}

export default Percentages;
