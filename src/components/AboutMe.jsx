const AboutMe = () => {
    return (
        <section id="about" className="about-me-section">
            <div className="about-me-left">
                <h1 className="service-heading">Interested In</h1>
                <div className="service-item">
                    <span className="service-icon">💻</span>
                    <h3 className="service-title">Cyber Security</h3>
                </div>
                <div className="service-item">
                    <span className="service-icon">☁️</span>
                    <h3 className="service-title">IOT </h3>
                </div>
                <div className="service-item">
                    <span className="service-icon">🤖</span>
                    <h3 className="service-title">AI and ML</h3>
                </div>
            </div>
            <div className="about-me-right">
                <h2 className="about-title">About me</h2>
                <p className="about-paragraph">
                    I am a Computer Science student from India, 
                    currently focusing on Cyber Security, IoT, and 
                    Machine Learning. I am eager to collaborate on projects related 
                    to Machine Learning, IoT, and Cyber Security. I am also 
                    seeking assistance with Defensive Hacking and Machine Learning. 
                    My current learning journey includes Rust, Machine Learning, Artificial Intelligence, 
                    and Defensive Hacking. Feel free to connect with me to discuss Cars, Books, and Technology.
                </p>
                <div className="stats-container">
                 <div className="stat-item">
                    <strong className="stat-value">4</strong>
                    <p className="stat-value">Completed Project </p>
                 </div>
                 <div className="stat-item">
                    <strong className="stat-value">1</strong>
                    <p className="stat-value">Year of Experience</p>
                 </div>
                </div>
            </div>
        </section>
    );

};

export default AboutMe