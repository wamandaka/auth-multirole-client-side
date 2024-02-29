import React, { Dispatch, useEffect } from "react";
import Layout from "./Layout";
import Welcome from "../components/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Dashboard = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <div>
      <Layout>
        <Welcome />
      </Layout>
    </div>
  );
};

export default Dashboard;
