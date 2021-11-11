import React from "react";
import OrganizationChart from "@dabeng/react-orgchart";
import data from "../data.json"
const DragDropChart = () => {
  const ds = data


  return <OrganizationChart datasource={ds} draggable={true} />;
};

export default DragDropChart;
