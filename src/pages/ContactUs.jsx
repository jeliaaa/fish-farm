import React from 'react';

const ContactUs = () => {
    const teamMembers = [
        { 
            name: 'ალექსანდრე ჯელია', 
            photo: 'https://via.placeholder.com/100'
        },
        { 
            name: 'გიორგი გობაძე',
            photo: 'https://via.placeholder.com/100'
        },
        { 
            name: 'ნიკოლოზ აბულაძე', 
            photo: 'https://via.placeholder.com/100'
        },
        { 
            name: 'ელისაბედ გეგეშიძე', 
            photo: 'https://via.placeholder.com/100'
        },
        { 
            name: 'მართა თოდუა', 
            photo: 'https://via.placeholder.com/100'
        },
    ];

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>ჩვენი გუნდი</h2>
            <div style={styles.team}>
                {teamMembers.map((member, index) => (
                    <div key={index} style={styles.teamMember}>
                        <img src={member.photo} alt={member.name} style={styles.photo} />
                        <h3 style={styles.name}>{member.name}</h3>
                        {/* <p style={styles.role}>{member.role}</p> */}
                    </div>
                ))}
            </div>
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
        textAlign: 'center',
        marginBottom: '20px',
    },
    team: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '30px',
    },
    teamMember: {
        width: '200px',
        padding: '10px',
        margin: '10px',
        border: '1px dotted #333',
        borderRadius: '8px',
        textAlign: 'center',
    },
    photo: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '10px',
    },
    name: {
        margin: '10px 0 5px 0',
    },
    role: {
        margin: '0',
        color: '#666',
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
