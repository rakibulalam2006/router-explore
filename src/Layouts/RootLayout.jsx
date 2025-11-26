import { CartContext } from "../Provider/CartContext";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoadingSpinner from "../Components/LoadingSpinner";
import React, { useState } from "react";

const RootLayout = () => {
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();
  // console.log(navigation);
  return (
    <CartContext.Provider value={{cart,setCart}}>
      <div className="max-w-[1200px] mx-auto">
        <Navbar />
        {navigation.state === "loading" ? (
          <LoadingSpinner />
        ) : (
          <main className="min-h-[calc(100vh-285px)]">
            <Outlet />
          </main>
        )}
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default RootLayout;
