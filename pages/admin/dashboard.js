import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

// components

import CardLineChart from "/components/Cards/CardLineChart.js";
import CardBarChart from "/components/Cards/CardBarChart.js";

import CardStats from "../../components/Cards/CardStats";
import Admin from "/layout/Admin.js";
import CardTaskTable from "../../components/Cards/CardTaskTable";
export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="flex flex-wrap bg-gradient-to-r from-white to-gray-300 ">
        <CardTaskTable />
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
