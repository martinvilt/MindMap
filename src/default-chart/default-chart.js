import React from "react";
import OrganizationChart from "@dabeng/react-orgchart";
import data from "../data.json"
const DefaultChart = () => {
  const ds = data

  return <OrganizationChart datasource={ds} />;
};

export default DefaultChart;
