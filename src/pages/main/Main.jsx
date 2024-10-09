// Main.js

import React from 'react';
import './main.scss';
import farmImg from '../../assets/farm.png'
import buoyImg from '../../assets/buioki.png'
import forumImg from '../../assets/forum.png'
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

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
                    <span>ნახვა</span>
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

            <div className="about-us">
                <div className="about-us__container">
                    <h1 className="about-us__title">ჩვენს შესახებ</h1>
                    <p className="about-us__text">
                        ჩვენი პროექტი მოიცავს თანამედროვე, მაღალტექნოლოგიური მიდგომების დამკვიდრებას აქვაკულტურაში და ამასთანავე საქართველოში ამ კონკრეტული მიმდინარეობის განვითარებას. ჩვენ ვაძლევთ ადამიანებს საშუალებას იმისა, რომ იქონიონ საკუთარი ფერმა და/ან ნაკლები ადამიანური და ფინანსური რესურსით მოუარონ მათ.
                    </p>
                    <ReactPlayer width={'100%'} height={'100%'} controls={true} url={'https://fb.watch/v5UwyLVzuK/'} />

                    {/* <div className="about-us__team">
                        <h2 className="about-us__team-title">Our Team</h2>
                        <div className="about-us__team-members">
                            <div className="about-us__team-member">
                                <img src="/images/member1.jpg" alt="Team Member" className="about-us__team-member-photo" />
                                <p className="about-us__team-member-name">John Doe</p>
                                <p className="about-us__team-member-role">CEO</p>
                            </div>
                            <div className="about-us__team-member">
                                <img src="/images/member2.jpg" alt="Team Member" className="about-us__team-member-photo" />
                                <p className="about-us__team-member-name">Jane Smith</p>
                                <p className="about-us__team-member-role">CTO</p>
                            </div>
                            <div className="about-us__team-member">
                                <img src="/images/member3.jpg" alt="Team Member" className="about-us__team-member-photo" />
                                <p className="about-us__team-member-name">Emily Johnson</p>
                                <p className="about-us__team-member-role">COO</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="responsive-card">
                <img src={farmImg} alt="Descriptive Alt Text" className="responsive-card__image" />
                <div className="responsive-card__text">
                    <h1>ჭკვიანი თევზის ფერმა</h1>
                    <p>ფერმა ხდება სრულიად დამოუკიდებელი ჩვენი მოწყობილობის საშუალებით, რომელსაც აქვს საშუალება აიღოს დინების შესახებ მონაცემი, მიიღოს მიმართულება, მოძებნოს ოპტიმალური საჭმლის განთავსების ადგილი და ჩამოყაროს საჭმელი ისეთ ადგილას სადაც მაქსიმალურად მცირეა გაფლანგვა.
                        <br /><br />
                        <u>
                            <Link to='/demos/farm'>იხ. დემო ვერსია</Link>
                        </u>
                    </p>
                </div>
            </div>
            <div className="responsive-card">
                <div className="responsive-card__text">
                    <h1>ჭკვიანი ტივტივა</h1>
                    <p>
                        ტივტივა, რომელიც აგროვებს ინფორმაციას წყალზე და აწვდის მას მფლობელს, ამ ტივტივას აქვს უნარი სრაფად განაახლოს აუცილებელი ინფორმაცია წყალზე. სამომავლოდ, იგეგმება ტივტივას მონაცემი დაკავშირდეს ვებსაიტზე რომელიც თავისუფალ წვდომაში იქნება ყველა მომხმარებლისთვის და სადაც დაგროვდება ინფორმაცია. <br /> <u><Link to='/demos/buyoy'>იხ. დემო ვერსია</Link></u> <br />  ამას მოჰყვება ერთგვარი ფორუმის ჩამოყალიბება.
                        <br /> იხ. ვებსაიტი <a style={{ textDecoration: 'underline' }} href='https://nasadata.vercel.app'>ბმული</a>
                        <br /> და ასევე ფორუმი, რომელიც ჯერ კიდევ მზადების პროცესშია:
                        <img src={forumImg} alt='forum' style={{ width: "90%", marginTop: 20 }} />
                    </p>

                </div>
                <img src={buoyImg} alt="Descriptive Alt Text" style={{ marginTop: 10 }} className="responsive-card__image" />
            </div>
            {/* <div className="species">
                <Link to={'/rectangle'} className="card">
                    <i className="fa-solid fa-square"></i>
                    <span style={{marginTop:30}}>კვადრატული ფორმა</span>
                    <span className='view'>ნახვა</span>
                </Link>
                <Link to={'/circular'} className="card">
                    <i className="fa-solid fa-circle"></i>
                    <span style={{marginTop:30}}>წრიული ფორმა</span>
                    <span className='view'>ნახვა</span>
                </Link>
            </div> */}
        </div>
    );
};

export default Main;
