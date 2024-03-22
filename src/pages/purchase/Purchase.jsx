import React, { useState } from 'react'
import './purchase.scss'
const Purchase = () => {
    // const [tab, setTab] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        purpose: '',
        residence: '',
        species: '',
        amount: '',
        size: '',
        isOutdoor: false,
        costRange: '',
        country: '',
        email: '',
        telephone: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };
    return (
        <div className='Purchase'>
            <div className="tabs">
                <div className='tab'>Fish Farm</div>
            </div>
                <div className='fish_panel'>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">სახელი:</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="surname">გვარი:</label>
                                <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange}  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="purpose">მიზანი:</label>
                                <input type="text" id="purpose" name="purpose" value={formData.purpose} onChange={handleChange}  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="residence">ლოკაცია:</label>
                                <input type="text" id="residence" name="residence" value={formData.residence} onChange={handleChange}  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="species">მოსაშენებელი ჯიში:</label>
                                <input type="text" id="species" name="species" value={formData.species} onChange={handleChange}  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="amount">რაოდენობა:</label>
                                <input type="text" id="amount" name="amount" value={formData.amount} onChange={handleChange}  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">ქვეყანა:</label>
                                <input type="text" id="country" name="country" value={formData.country} onChange={handleChange}  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">ელ. ფოსტა:</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telephone">მობილური:</label>
                                <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange}  />
                            </div>

                            <div className="form-group">
                                <input type="submit" onClick={() => alert("შეამოწმეთ ელ. ფოსტა, ჩვენ მალევე შეგეხმიანებით")} />
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Purchase