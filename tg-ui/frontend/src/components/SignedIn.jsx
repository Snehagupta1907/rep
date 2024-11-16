"use client";
import React from "react";
import { usePrivy } from "@privy-io/react-auth";
import Loader from "./Loader";

const SignedIn = ({ children }) => {
  const { ready, authenticated } = usePrivy();


  if (!ready) {
    return <Loader />;
  }

  if (authenticated) {
    return <>{children}</>;
  }

  return null;
};

export default SignedIn;
