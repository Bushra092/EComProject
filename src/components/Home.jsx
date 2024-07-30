import React from "react";
import HeroSection from "./HeroSection";
import Service from "./Service";
import Trusted from "./Trusted";
import FeatureProduct from "./FeatureProduct ";

const Home = () => {
  const data = {
    name: "my store Name",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Service />
      <Trusted />
    </>
  );
};

export default Home;
