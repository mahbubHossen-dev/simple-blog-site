"use client";
import createStores from "@/lib/store/store";
import { useRef } from "react";
import { Provider } from "react-redux";

const ProviderStore = ({ children }) => {
  const myStoreRef = useRef(undefined);
  if (!myStoreRef.current) {
    myStoreRef.current = createStores();
  }
  return <Provider store={myStoreRef.current}>{children}</Provider>;
};

export default ProviderStore;