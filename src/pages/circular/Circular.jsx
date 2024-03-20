import React from 'react';
import './circular.scss'; // Import the CSS file for styling
import img from '../../assets/farmJust.webp'
import im2 from '../../assets/cagePro.png'
import { Link } from 'react-router-dom';

const PricingCard = ({ title, price, imgg }) => {
    return (
        <Link to={`/${title}`} className="pricing-card">
            <h2>{title}</h2>
            <img style={{width:'80%'}} alt='...' src={imgg} />
            <p style={{marginBottom:30}}>${price}</p>
            <button>შეძენა</button>
        </Link>
    );
};

const Circular = () => {
    return (
        <div className="pricing-cards-container">
            <PricingCard imgg={img}title="Farm" price={50} />
            <PricingCard imgg={im2}title="Farm Pro" price={100} />
            <PricingCard imgg={img}title="Farm Pro Max" price={150} />
        </div>
    );
};

export default Circular;