import React from "react";
import OrganizationChart from "@dabeng/react-orgchart";
import MyNode from "./my-node";
import data from "../data.json"
const CustomNodeChart = () => {
  const ds = data;

  return (
    <OrganizationChart
      datasource={ds}
      chartClass="myChart"
      NodeTemplate={MyNode}
    />
  );
};

export default CustomNodeChart;
