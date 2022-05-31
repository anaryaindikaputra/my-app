import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

function Home() {
    return (
        <div className='home'>
            <div className="home__header">
                <h1 className="header__title">Hello Anarya!</h1>
                <h3 className="header__subtitle">Current Location: Bekasi</h3>
            </div>
            <div className="home__cta">
                <h2>Let's find what you are craving today!</h2>
                <Link to="category"><button className='cta__button'><span>Check Our Category</span></button></Link>
            </div>
        </div>
    )
}

export default Home;