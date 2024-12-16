import React, { useState } from "react";

import "./Home.css";

import Header from "../../../components/Header/Header";
import Exploremenu from "../../../components/Exploremenu/Exploremenu";
import FoodDisplay from "../../FoodDisplay/FoodDisplay";
import Appdownload from "../../Appdownload/Appdownload";

const Home = () => {
  const [category, setCategory] = useState("ALL");

  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Appdownload />
    </div>
  );
};

export default Home;
