// ContactUs.js

import React from 'react';

const ContactUs = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Contact Us</h2>

            <div style={styles.contactMethods}>
                <div style={styles.contactMethod}>
                    <h3>Email</h3>
                    <p>Email us at: <a href="mailto:starfish.info.btm@gmail.com">your.email@example.com</a></p>
                </div>

                <div style={styles.contactMethod}>
                    <h3>LinkedIn</h3>
                    <p>Connect with me on <a style={{textDecoration:'underline'}} href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a> <i className='fa-brands fa-linkedin'></i></p>
                </div>

                <div style={styles.contactMethod}>
                    <h3>Facebook</h3>
                    <p>Find me on <a href="https://www.facebook.com/your.facebook" target="_blank" rel="noopener noreferrer" style={{textDecoration:'underline'}}>Facebook</a> <i className='fa-brands fa-facebook'></i></p>
                </div>

                <div style={styles.contactMethod}>
                    <h3>Instagram</h3>
                    <p>Follow me on <a style={{textDecoration:'underline'}} href="https://www.instagram.com/your.instagram" target="_blank" rel="noopener noreferrer">Instagram</a><i className='fa-brands fa-instagram'></i></p>
                </div>

                <div style={styles.contactMethod}>
                    <h3>Mobile Phone</h3>
                    <p>Call or message me at: <a href="tel:+123456789">+1 (234) 567-89</a></p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: '100%',
        margin: 'auto',
        paddingTop:'30px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        color: '#333',
    },
    contactMethods: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        marginTop: '20px',
    },
    contactMethod: {
        flex: '1',
        width:'60%',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        marginBottom: '20px',
    },
};

export default ContactUs;
