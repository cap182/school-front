import * as React from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";

function PercentagesPieChart({percentages}) {
console.log('perper',percentages);
  const data = percentages.map(({description, percentage}) => {
    return {label: description, value: percentage}
  })
  const total = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.value/100,
    0,
  );
  return (
    <Stack direction="row">
      <PieChart  
      colors={[ '#d5f520', '#ed1330', '#13ed4d', '#2e66ff']}    
        series={[
          {
            innerRadius: 77,
            outerRadius: 96,
            paddingAngle: 2,
            cornerRadius: 5,    
            startAngle: 0,
            endAngle: total*360,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 40, additionalRadius: -10, color: 'gray' },
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={200}
        height={200}
        slotProps={{
          legend: { hidden: true },
        }}
      />
    </Stack>
  );
}

export default PercentagesPieChart;
