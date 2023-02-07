import React from "react";

// components

import CardSettings from "/components/Cards/CardSettings.js";
import CardProfile from "/components/Cards/CardProfile.js";

// layout for page

import Admin from "/layout/Admin.js";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-3/12 px-4">
          <Sidebar />
        </div>

        <div className="w-full lg:w-5/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}

Settings.layout = Admin;
