import React from "react";
const FooterLinks = () => {
    const footerStyle = {
        width: '100%',
        height: '500px',
        background: '#f1f1f1',
        color: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const mainStyle = {
        width: '1070px',
    };

    const detailStyle = {
        fontSize: '.7rem',
        color: '#95a5a6',
        padding: '20px 0',
        borderBottom: '1px solid #bdc3c7',
    };

    const welcomeStyle = {
        display: 'flex',
        margin: '20px 0',
        fontSize: '.8rem',
        color: '#34495e',
    };

    const ulStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    const listStyle = {
        listStyle: 'none',
    };

    const linkStyle = {
        color: '#7f8c8d',
        fontSize: '.8rem',
    };

    const copyrightStyle = {
        color: '#7f8c8d',
        fontSize: '.7rem',
        display: 'flex',
        justifyContent: 'space-between',
    };

    const vrStyle = {
        height: '15px',
        width: '1px',
        background: '#bdc3c7',
    };

    const circleStyle = {
        width: '15px',
        height: '15px',
    };
    return (

        <footer style={footerStyle}>
            <div className="footer-main" style={mainStyle}>
                <div className="footer-detail" style={detailStyle}>
                    <p>* Trade-in service is provided by Apple’s trade-in partners. Trade-in value quotes are estimated only and actual values may be lower than the estimation. Trade-in values vary based on the condition, year and model of your trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit. Trade-in value may be applied towards qualifying new device purchase. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Apple’s trade-in partners reserve the right to refuse, cancel or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply. For recycling eligible equipment, terms and restrictions may apply.</p>
                    <p>A subscription is required for Apple TV+.</p>
                </div>
                <div />
                <div className="footer-ul" style={ulStyle}>
                    <ul style={linkStyle}>
                        <li><h4 className="font-bold">Shop and Learn</h4></li>
                        <li><a href="#">Mac</a></li>
                        <li><a href="#">iPad</a></li>
                        <li><a href="#">iPhone</a></li>
                        <li><a href="#">Apple Watch</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Music</a></li>
                        <li><a href="#">iTunes</a></li>
                        <li><a href="#">iPod Touch</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Gift Cards</a></li>
                    </ul>

                    <ul style={linkStyle}>
                        <li><h4 className="font-bold">Apple Store</h4></li>
                        <li><a href="#">Apple Store App</a></li>
                        <li><a href="#">Financing</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Shopping Help</a></li>
                    </ul>

                    <ul style={linkStyle}>
                        <li><h4 className="font-bold">For Education</h4></li>
                        <li><a href="#">Apple and Education</a></li>
                        <li><a href="#">Shop for College</a></li>
                        <li id="mt"><h4 className="font-bold">For Business</h4></li>
                        <li><a href="#">Apple and Business</a></li>
                        <li><a href="#">shop for Business</a></li>
                    </ul>

                    <ul style={linkStyle}>
                        <li><h4 className="font-bold">Account</h4></li>
                        <li><a href="#">Manage Your Apple ID</a></li>
                        <li><a href="#">Apple Store Account</a></li>
                        <li><a href="#">iClound.com</a></li>
                        <li id="mt"><h4 className="font-bold">Apple Values</h4></li>
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Environment</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Supplier Responsibility</a></li>
                    </ul>

                    <ul style={linkStyle}>
                        <li><h4 className="font-bold">About Apple</h4></li>
                        <li><a href="#">Newsroom</a></li>
                        <li><a href="#">Investors</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Contact Apple</a></li>
                    </ul>
                </div>


            </div>
        </footer>
    );
}

export default FooterLinks;