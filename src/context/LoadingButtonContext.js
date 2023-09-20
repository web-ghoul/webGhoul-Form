"use client";
import { createContext, useContext } from "react";
import { useState } from "react";

export const LoadingButtonContext = useContext();

const LoadingButtonProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingButtonContext.Provider value={(isLoading, setIsLoading)}>
      {children}
    </LoadingButtonContext.Provider>
  );
};

export default LoadingButtonProvider;
