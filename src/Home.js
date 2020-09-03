import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
        {/*Product id, title, price, rating, image */} 
        <div className="home__row">
            <Product
                id="1"
                title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)"
                price={54999.00}
                rating={5} 
                image="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SX679_.jpg"
            />
            <Product
                id="2"
                title="ZOTAC Gaming GeForce RTX 2080 Super AMP Extreme Edition 8GB GDDR6"
                price={74200.00}
                rating={5} 
                image="https://images-na.ssl-images-amazon.com/images/I/61%2BgaKZyVFL._SX679_.jpg"
            />
        </div>
        <div className="home__row">
            <Product
                id="3"
                title="CORSAIR K95 RGB Mechanical Keyboard"
                price={17099.00}
                rating={5} 
                image="https://images-na.ssl-images-amazon.com/images/I/71qjMsvM3VL._SX522_.jpg"
            />
            <Product
                id="4"
                title="CORSAIR Void PRO RGB Gaming Headset"
                price={32645.00}
                rating={5} 
                image="https://images-na.ssl-images-amazon.com/images/I/61rP8%2Bu53eL._SX679_.jpg"
            />
            <Product
                id="5"
                title="Apple iPad Pro (11-inch, Wi-Fi, 128GB)"
                price={71999.00}
                rating={5} 
                image="https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._SX679_.jpg"
            />
        </div>
        <div className="home__row">
            <Product
                id="6"
                title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                price={139999.00}
                rating={5} 
                image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SX679_.jpg"
            />
        </div>
        </div>
    );
}

export default Home
