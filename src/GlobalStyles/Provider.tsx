import React, { ReactNode } from "react";
import "./GlobalStyles.scss";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
interface Props {
  children: ReactNode;
}
const queryClient = new QueryClient();
const Provider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </QueryClientProvider>
  );
};

export default Provider;
