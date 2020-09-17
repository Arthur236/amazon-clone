import React from "react";

import Product from "./Product";

import "./css/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._SL1500_.jpg"
            price={499.99}
            rating={4.5}
            title="PlayStation 5 Console"
          />

          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/711xGPcLL2L._SL1500_.jpg"
            price={375.44}
            rating={4.5}
            title="PlayStation 4 Slim 1TB Console - Marvel's Spider-Man Bundle [Discontinued]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
