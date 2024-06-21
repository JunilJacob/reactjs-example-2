import React from "react";
import { Outlet } from "react-router-dom";

export default function Hooks() {
  return (
    <div>
      <h1>Hooks</h1>

      <Outlet />
    </div>
  );
}