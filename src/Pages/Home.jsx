// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import PlantCard from "../Components/PlantCard";

const Home = () => {
  // const [plants, setPlants] = useState([]);
  // useEffect(() => {
  //   fetch("https://openapi.programming-hero.com/api/plants")
  //     .then((res) => res.json())
  //     .then((data) => setPlants(data?.plants));
  // }, []);
  // console.log(plants);
  
  const {plants} = useLoaderData()
  // console.log(plants)
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:max-w-[1050px] mx-auto">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Home;
