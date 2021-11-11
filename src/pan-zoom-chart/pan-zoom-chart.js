import React from "react";
import OrganizationChart from "@dabeng/react-orgchart";
import data from "../data.json";
const PanZoomChart = () => {
  const ds = data;

  return <OrganizationChart datasource={ds} pan={true} zoom={true} />;
};

export default PanZoomChart;
