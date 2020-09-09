import React from "react";
import "./Home.css";
import Product from "./Product";

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
            id="12320"
            title="The Lean Startup"
            price={10}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="12321"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price={20}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12322"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price={20}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
          />
          <Product
            id="12323"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price={20}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
          />
          <Product
            id="12324"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price={20}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12325"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price={20}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12326"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price={20}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
          />
          <Product
            id="12327"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price={20}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
          />
          <Product
            id="12328"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price={20}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
          />
          <Product
            id="12329"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price={20}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
