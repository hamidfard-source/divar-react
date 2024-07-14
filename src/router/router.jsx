import { useQuery } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "pages";
import PageNotFound from "pages/404";
import Adminpage from "pages/adminpage";
import DashboardPage from "pages/dashboardPage";
import { getProfile } from "services/user";
import { Toaster } from "react-hot-toast";

const Router = () => {
  const { data, isLoading } = useQuery(["profile"], getProfile);

  if (isLoading) return <h1>... Loading</h1>;
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} gutter={8} />
      <Routes>
        <Route path="/" element={<Index />} index />
        <Route path="/admin" element={data && data.data.role === "ADMIN" ? <Adminpage /> : <Navigate to={"/"} />} />
        <Route path="/dashboard" element={data && data.data.role === "USER" ? <DashboardPage /> : <Navigate to={"/"} />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
