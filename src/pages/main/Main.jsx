// Main.js

import React from 'react';
import './main.scss';

const Main = () => {
    const handleScrollDown = () => {
        // Scroll down logic
        const scrollTarget = document.getElementById('scrollTarget');
        if (scrollTarget) {
            scrollTarget.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='main'>
            <div className="main_bg" style={{ backgroundImage: `url('https://sentientmedia.org/wp-content/uploads/2021/08/WAM3178-1.jpg')`, height: '90vh' }}>
                <button className='Scroll' onClick={handleScrollDown}>
                    <span>view</span>
                    <span className='chevron'>&#8964;</span>
                </button>
            </div>

            {/* Add content in the scroll target */}
            <div id="scrollTarget" className="scroll_section">
                <h1>Welcome!</h1>
                <hr />
                <div className='hero_right'>
                    <div className='left'>
                        <p>
                            We are StarFish. A Company which mostly operates on the Black Sea coast. We help people to findthe way to develop their
                            own device for their aquaculture. Fish, sea weed, shrimps, everything! We learn about the species and the environment which are specific for our user
                            and crate the highly optimised high-tech device for them, it will make the process easier and more comfortable.
                        </p>
                        <div className='operating_places'>
                            <h6>Main Places where we operate for now:</h6>
                            <hr />
                            <ul>
                                <li>Batumi</li>
                                <li>Kobuleti</li>
                                <li>Trabzon</li>
                                <li>Photi</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16143/production/_118153409_aquamaof1.jpg" alt="..." />
                    </div>
                </div>
            </div>
            <div className="species">
                <div className="card">
                    <i className="fa-solid fa-shrimp"></i>
                    <span>Shrimps</span>
                    <span className='view'>View</span>
                </div>
                <div className="card">
                    <i className="fa-solid fa-fish"></i>
                    <span>Fish</span>
                    <span className='view'>View</span>
                </div>
                <div className="card">
                    <i className="fa-solid fa-water"></i>
                    <span>Sea weed</span>
                    <span className='view'>View</span>
                </div>
            </div>
        </div>
    );
};

export default Main;
