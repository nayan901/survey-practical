import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Title } from "../../common";
import { que_0, que_1, que_2, que_3, data } from "../../../dummyData/chartData";
import mcq from "../../../dummyData/mcq.json";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
// Generate Sales Data

export default function ChartSingle() {
  const theme = useTheme();

  const [info, setInfo] = useState(que_0);
  const [selQuestion, setSelQuestion] = useState(0);

  const handleChange = (val) => {
    setSelQuestion(val);
    console.log("Change", val);
    let infos = que_0;
    switch (val) {
      case 1:
        infos = que_1;
        break;
      case 2:
        infos = que_2;
        break;
      case 3:
        infos = que_3;
        break;
      default:
        infos = que_0;
        break;
    }
    setInfo(infos)
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
        <Title>Question Wise</Title>
        <Box sx={{ width: 0.7 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Question</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selQuestion}
              label="Question"
              onChange={(e) => handleChange(e.target.value)}
            >
              {mcq.map((mcqs, index) => (
                <MenuItem value={index}>{mcqs.question}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
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
