import React from "react";
import AllWithdraw from "../../components/Admin/AllWithdraw";
import AdminSideBar from "../../components/Admin/Layout/AdminSideBar";
import AdminHeader from "../../components/Layout/AdminHeader";

const AdminDashboardWithdraw = () => {
  return (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <AdminSideBar active={7} />
          </div>
          <AllWithdraw />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardWithdraw;
