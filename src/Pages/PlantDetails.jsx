// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useLocation } from "react-router";
import { CartContext } from "../Provider/CartContext";

const PlantDetails = () => {
  const { cart,setCart } =useContext(CartContext)
  // const { id } = useParams()
  // console.log(id)
  // const [plant, setPlant] = useState({});
  // useEffect(() => {
  //   fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPlant(data?.plants))
  //   axios(`https://openapi.programming-hero.com/api/plant/${id}`)
  //     .then((data) => console.log(data.data.plants))
  //     .then((data) => setPlant(data.data.plants))
  // }, [id]);

  const location = useLocation();
  console.log(location);

  // const { data } = useLoaderData();
  // console.log(data);

  const { name, description, category, price, image } = location?.state || {};

  return (
    <div>
      <div className="text-xl lg:ml-38">Cart{cart.length}</div>
      <div className="card bg-base-100 max-w-4xl max-h-[600px] mx-auto shadow-sm my-3">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>{category}</p>
          <p>Price:{price}$</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => setCart((prv) => [...prv, location?.state])}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
