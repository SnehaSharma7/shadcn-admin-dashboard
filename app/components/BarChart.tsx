"use client";
import React from "react";
import {
  BarChart as BarGraph,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    total: 4000,
  },
  {
    name: "Page B",
    total: 3000,
  },
  {
    name: "Page C",
    total: 2000,
  },
  {
    name: "Page D",
    total: 2780,
  },
  {
    name: "Page E",
    total: 2780,
  },
  {
    name: "Page F",
    total: 2780,
  },
  {
    name: "Page G",
    total: 2780,
  },
  {
    name: "Page H",
    total: 2780,
  },
];

export default function BarChart() {
  return (
    <ResponsiveContainer width={"100%"} height={450}>
      <BarGraph data={data}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke={"#888888"}
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke={"#888888"}
          fontSize={12}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey={"total"} fill="#888888" radius={[4, 4, 0, 0]} />
      </BarGraph>
    </ResponsiveContainer>
  );
}
