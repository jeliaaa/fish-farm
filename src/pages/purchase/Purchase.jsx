import React, { useState } from 'react'
import './purchase.scss'
const Purchase = () => {
    const [tab, setTab] = useState(0);
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
                <div className={`tab ${tab === 0 ? 'active' : ''}`} onClick={() => setTab(0)}>Shrimp Farm</div>
                <div className={`tab ${tab === 1 ? 'active' : ''}`} onClick={() => setTab(1)}>Fish Farm</div>
            </div>
            {tab === 0 ?
                <div className='fish_panel'>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="surname">Surname:</label>
                                <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange}  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="purpose">Purpose:</label>
                                <input type="text" id="purpose" name="purpose" value={formData.purpose} onChange={handleChange}  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="residence">Place of Residence:</label>
                                <input type="text" id="residence" name="residence" value={formData.residence} onChange={handleChange}  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="species">Species:</label>
                                <input type="text" id="species" name="species" value={formData.species} onChange={handleChange}  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="amount">Amount:</label>
                                <input type="text" id="amount" name="amount" value={formData.amount} onChange={handleChange}  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="size">Size:</label>
                                <input type="text" id="size" name="size" value={formData.size} onChange={handleChange}  />
                            </div>
                            <label>
                                Cost Range:
                                <input type="range" name="costRange" min="0" max="100" value={formData.costRange} />
                                {formData.costRange} {/* Display the current value */}
                            </label>

                            <div className="form-group">
                                <label htmlFor="costRange">Cost Range:</label>
                                <input type="text" id="costRange" name="costRange" value={formData.costRange} onChange={handleChange}  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country:</label>
                                <input type="text" id="country" name="country" value={formData.country} onChange={handleChange}  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Gmail:</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}  />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telephone">Telephone:</label>
                                <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange}  />
                            </div>

                            <div className="form-group">
                                <input type="submit" onClick={() => alert("We will contact you in 3-4 bussiness days! Thank You :0")} />
                            </div>
                        </form>
                    </div>
                </div>
                :
                <div className='shrimp_panel'>

                </div>
            }
        </div>
    )
}

export default Purchase