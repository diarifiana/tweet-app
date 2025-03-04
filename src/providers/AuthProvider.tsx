"use client";

import { useAppDispatch } from "@/redux/hooks";
import { loginAction } from "@/redux/slices/user";
import { PropsWithChildren, useEffect } from "react";
const AuthProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = localStorage.getItem("tweet-storage");

    if (data) {
      dispatch(loginAction(JSON.parse(data)));
    }
  }, []);
  return <>{children}</>;
};

export default AuthProvider;
