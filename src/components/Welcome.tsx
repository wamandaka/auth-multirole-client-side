import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <div className="text-base-300">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <h2 className="text-2xl font-bold">saya adalah {user?.name}</h2>
    </div>
  );
};

export default Welcome;
