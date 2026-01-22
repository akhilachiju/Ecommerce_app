import React from "react";
import { AppProviders, AppRoutes } from "./routes";
import { Layout, ScrollToTop } from "./components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AppProviders>
      <ScrollToTop />
      <Layout>
        <AppRoutes />
      </Layout>
      <ToastContainer />
    </AppProviders>
  );
};

export default App;
