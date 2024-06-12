// ContactUs.js

import React from 'react';

const ContactUs = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>კონტაქტები</h2>

            <div style={styles.contactMethods}>
                <div style={styles.contactMethod}>
                    <h3>ელ.ფოსტა</h3>
                    <p>დაგვეონტაქტეთ: <a href="mailto:starfish.info.btm@gmail.com">starfish.info.btm@gmail.com</a></p>
                </div>
                <div style={styles.contactMethod}>
                    <h3>მობილური</h3>
                    <p>დაგვირეკეთ ან მოგვწერეთ: <a href="tel:+995579166280">+995 579 16 62 80</a></p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: '100%',
        margin: 'auto',
        paddingTop: '30px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        color: '#333',
        textAlign: 'center'
    },
    contactMethods: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
    },
    contactMethod: {
        flex: '1',
        width: '60%',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        marginBottom: '20px',
    },
};

export default ContactUs;
