import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Title } from "../../common";
import { data } from "../../../dummyData/chartData";
import {
  Grid,
} from "@mui/material";
// Generate Sales Data

export default function Chart() {
  const theme = useTheme();

  const [info, setInfo] = useState(data);

  const handleChange = (val) => {
    // setInfo(`que_${val}`);
  };

  console.log(info);

  return (
    <React.Fragment>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title>Over all Summery</Title>
      </Grid>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={info}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis fontSize={10} dataKey="name" />
          <YAxis fontSize={12} />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="White / Blue / Grey" stackId="a" fill="#dbaf28" />
          <Bar dataKey="White / cyan / Grey" stackId="a" fill="#bc5090" />
          <Bar dataKey="White / Peach" stackId="a" fill="#2ed060" />
          <Bar dataKey="Black / Grey / White" stackId="a" fill="#6ad8cd" />
          <Bar dataKey="Yes" stackId="a" fill="#00ff00" />
          <Bar dataKey="No" stackId="a" fill="#ff0000" />
          <Bar dataKey="Website 1" stackId="a" fill="#5a8287" />
          <Bar dataKey="Website 2" stackId="a" fill="#725a87" />
          <Bar dataKey="Website 3" stackId="a" fill="#875a73" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
