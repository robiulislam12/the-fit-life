import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import { addToDb, getLocalStorageTime } from "../../utils/fakedb";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";
import "./Home.css";

const Home = () => {

  const [totalTime, setTotalTime] = useState(0);

  const handleAddToCart = time => {
    setTotalTime(time + totalTime);
    addToDb('totalTime',time + totalTime);
  }

  useEffect(()=>{
    const getTime = getLocalStorageTime('totalTime');
    setTotalTime(Number(getTime))
  }, [])

  return (
    <div className="container">
      <div className="main-section">
        <div className="card-section">
            {/* Header Section */}
          <div className="header">
            <a href="/">
              <img src={Logo} alt="the-fit-life" />
            </a>
            <h1>Select today's exercise</h1>
          </div>
          {/* Card Container */}
            <Cards handleAddToCart={handleAddToCart}/>
        </div>
        {/* Cart container  */}
        <div className="cart-container">
          <Cart totalTime={totalTime} setTotalTime={setTotalTime}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
