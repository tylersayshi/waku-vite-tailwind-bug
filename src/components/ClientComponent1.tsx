"use client";

import React from "react";
import { ClientComponent2 } from "./ClientComponent2";

export const ClientComponent1: React.FC = () => {
  return (
    <>
      <h1>--- ClientComponent1 ---</h1>
      <h2 className={"bg-blue-100"}>ClientComponent1 new color</h2>
      <h2 className={"bg-blue-200"}>ClientComponent1 new color</h2>
      <ClientComponent2 />
    </>
  );
};
