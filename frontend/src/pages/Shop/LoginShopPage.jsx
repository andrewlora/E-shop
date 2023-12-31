import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginShop from "../../components/Shop/LoginShop";

const LoginShopPage = () => {
  const navigate = useNavigate();
  const { isSeller, isLoading } = useSelector((state) => state.seller);

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/dashboard`);
    }
  }, [isLoading, isSeller, navigate]);
  return (
    <div>
      <LoginShop />
    </div>
  );
};

export default LoginShopPage;
