// Main.js

import React from 'react';
import './main.scss';
import { Link } from 'react-router-dom';

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
                <h1>კეთილი იყოს თქვენი მობრძანება!</h1>
                <hr />
                <div className='hero_right'>
                    <div className='left'>
                        <p>
                            ჩვენ ვართ StarFish. კომპანია რომელიც გაძლევთ საშუალებას, დაიწყოთ თევზის მრეწველობა. ჩვენ ვეხმარებით მომხმარებელს მიიღონ ის შედეგი, რომელზეც ოცნებობდნენ. 
                            თევზი, წყალმცენარეები, ხამანწკები, ყველაფერი! ჩვენ, მომხმარებლის სურვილიდან და სიტუაციიდან გამომდინარე, ვსწავლობთ ყველაფერს და გთავაზობთ ოპტიმალურ გადაწყვეტილებას.
                            ჩვენი მიდგომა და მოწყობილობა, კომფორტულს ხდის რთულ საქმიანობას.
                        </p>
                        <div className='operating_places'>
                            <h6>სამიზნე ადგილები:</h6>
                            <hr />
                            <ul>
                                <li>ბათუმი</li>
                                <li>ფოთი</li>
                                <li>ურეკი</li>
                                <li>სარფი</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16143/production/_118153409_aquamaof1.jpg" alt="..." />
                    </div>
                </div>
            </div>
            <div className="species">
                <Link to={'/rectangle'} className="card">
                    <i className="fa-solid fa-square"></i>
                    <span style={{marginTop:30}}>კვადრატული ფორმა</span>
                    <span className='view'>View</span>
                </Link>
                <Link to={'/circular'} className="card">
                    <i className="fa-solid fa-circle"></i>
                    <span style={{marginTop:30}}>წრიული ფორმა</span>
                    <span className='view'>View</span>
                </Link>
            </div>
        </div>
    );
};

export default Main;
