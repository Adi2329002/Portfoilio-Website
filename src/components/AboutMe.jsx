const AboutMe = () => {
    return (
        <section id="about" className="about-me-section">
            <div className="about-me-left">
                <h1 className="service-heading">Intrested In</h1>
                <div className="service-item">
                    <span className="service-icon">💻</span>
                    <h3 className="service-title">Cyber Securities</h3>
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
                    I'm a CS Student from India<br />
                    🔭 I’m currently working on Many things<br />
                    👯 I’m looking to collaborate on ML , IOT and Cyber Securities projects<br />
                    🤝 I’m looking for help with Defensive Hacking<br />
                    🌱 I’m currently learning Rust, ML and AI, Defensive hacking<br />
                    💬 Ask me about any Cars,Books and Tech<br />
                    
                </p>
                <div className="stats-container">
                 <div className="stat-item">
                    <strong className="stat-value">4</strong>
                    <p className="stat-value">Completed Project </p>
                 </div>
                 <div className="stat-item">
                    <strong className="stat-value">1</strong>
                    <p className="stat-value">Year of Exprience</p>
                 </div>
                </div>
            </div>
        </section>
    );

};

export default AboutMe