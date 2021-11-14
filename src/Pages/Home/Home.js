import React from 'react';
import Reviews from '../Reviews/Reviews';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import BackGround from './BackGround/BackGround';
import Products from './Products/Products';
import TopBanner from './TopBanner/TopBanner';
import Subscribe from './Subscribe/Subscribe';
const Home = () => {
    return (
        <div>
            <NavBar />
            <TopBanner />
            <Products />
            <Reviews />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Home;