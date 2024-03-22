import React from 'react';
import './circular.scss'; // Import the CSS file for styling
import img from '../../assets/farmJust.webp'
import im2 from '../../assets/cagePro.png'
import bg from '../../assets/bg.png'
import { Link } from 'react-router-dom';

const PricingCard = ({ descriprion, title, price, imgg }) => {
    return (
        <Link to={`/${title}`} className="pricing-card">
            <h2>{title}</h2>
            <img style={{width:'80%'}} alt='...' src={imgg} />
            <p style={{marginBottom:30}}>₾ {price}</p>
            <div className='description'>
                {descriprion}
            </div>
            <button>შეძენა</button>
        </Link>
    );
};

const Circular = () => {
    return (
        <div className="pricing-cards-container" style={{backgroundImage:`url(${bg})`}}>
            <PricingCard descriprion={<span>ბადე-კარკასი</span>} imgg={img} title="Farm" price={6000} />
            <PricingCard descriprion={<ul><li>ბადე-კარკასი</li><li>წყლის მონიტორინგი</li><li>კამერა</li><li>კვების სისტემა</li></ul>} imgg={im2} title="Farm Pro" price={8000} />
            <PricingCard descriprion={<ul><li>ბადე-კარკასი</li><li>წყლის მონაცემები</li><li>კამერა</li><li>კვების სისტემა</li><li>AI ბადის მონიტორინგი</li><li>თვითწმენდა</li></ul>} imgg={img} title="Farm Pro Max" price={11000} />
        </div>
    );
};

export default Circular;