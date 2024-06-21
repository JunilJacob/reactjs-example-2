import React from "react";
import { Outlet } from "react-router-dom";

export default function ComponentType() {
  return (
    <div>

      <h1>Component Types</h1>

      <Outlet />
    </div>
  );
}