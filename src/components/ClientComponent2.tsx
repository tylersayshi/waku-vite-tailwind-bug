"use client";

import React from "react";

export const ClientComponent2: React.FC = () => {
  return (
    <>
      <h1>--- ClientComponent2 ---</h1>
      <h2 className={"bg-blue-200"}>ClientComponent2 used color</h2>
      <h2 className={"bg-blue-400"}>ClientComponent2 new color</h2>
    </>
  );
};
