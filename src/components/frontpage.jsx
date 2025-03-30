import React from 'react';
import './Frontcss.css'
import { useNavigate } from 'react-router';
const FrontPage = () => {
    const navigate=useNavigate()
    return (
        <div className="front-page-container">
            <div className='card'>
            <header className='main-section'>
                <div className="hero-section">
                    <h1>Welcome to Job Portal</h1>
                    <p>Your next opportunity is just a click away. click on Login</p>
                    <input type='button' className='signin-button' value='Login' onClick={()=>{navigate('/login')}}></input>
                    {/* <button className="signin-button" onClick={navigate('/login')}>Log In</button> */}
                </div>
            </header>
            </div>

            <section className="about-section">
                <h2>Find Your Dream Job</h2>
                <p>Explore a wide variety of jobs and careers tailored to your skills and preferences.</p>
                <p>Our portal connects you with top companies and employers looking for talent like you.</p>
            </section>

            <footer className="footer">
                <p>© 2025 Job Portal. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default FrontPage;
