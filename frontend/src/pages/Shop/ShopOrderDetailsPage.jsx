import React from "react";
import Footer from "../../components/Layout/Footer";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import OrderDetails from "../../components/Shop/OrderDetails";

const ShopOrderDetailsPage = () => {
  return (
    <div>
      <DashboardHeader />
      <OrderDetails />
      <Footer />
    </div>
  );
};

export default ShopOrderDetailsPage;
