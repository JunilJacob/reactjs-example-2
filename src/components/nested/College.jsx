import React from "react";
import { Outlet } from "react-router-dom";

export default function College() {
  return (
    <div>
      <h1>College</h1>

      <Outlet />
    </div>
  );
}