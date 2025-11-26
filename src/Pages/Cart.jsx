import React, { use} from "react";
import { CartContext } from "../Provider/CartContext";

const Cart = () => {
  const { cart, setCart } = use(CartContext);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3">
      {cart.map((plant) => (
        <div className="mb-5">
          <div className="card bg-base-100 shadow-sm max-w-[200px] lg:max-w-[300px] mt-[20px]">
            <figure className="w-full h-[175px] lg:[h-250px]">
              <img src={plant.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{plant.name}</h2>

              <p>Price:{plant.price}$</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Remove</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
