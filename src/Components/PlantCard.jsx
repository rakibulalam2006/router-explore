import React from "react";
import { Link, useNavigate } from "react-router";

const PlantCard = ({ plant }) => {
  const { name, image, category, price, id } = plant;
  // console.log(plant);

  const navigate = useNavigate();

  return (
    <div className="mb-5">
      <div className="card bg-base-100 shadow-sm max-w-[200px] lg:max-w-[300px] mt-[20px]">
        <figure className="w-full h-[175px] lg:[h-250px]">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{category}</p>
          <p>Price:{price}$</p>
          <div className="card-actions justify-end">
            {/* <Link
            to={`/plant-details/${id}`}
               state={plant}
              className="btn btn-primary"
            >
              View Details
            </Link> */}
            <button
              onClick={() =>navigate(`/plant-details/${id}`,{ state:plant })}
              className="btn btn-primary"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
