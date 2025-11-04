const Hero = () => {
    return(
        <section id="home" className="hero-section">
            <div className="hero-content">
                <p className="hero-greeting">Hello<span className="hero-dot">.</span></p>
                <h1 className="hero-name">I'm Aditya</h1>
                <h1 className="hero-title">CS Student</h1>
                <div className="hero-buttons">
                   <a 
                      href="#contacts" 
                      className="btn btn-primary"
                     >
                     Got a project?
                    </a> 
        
        
                 <a 
                   href="https://drive.google.com/file/d/1brEArrdOg0zyx1dr9XQHc_SF5PVm3-SE/view" // ⬅️ Replace this with your Google Drive Share URL
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="btn btn-secondary"
                  >
                 My Resume
                 </a>

                </div>
            </div>
            <div>
                <img src="/profile.jpg"
                      alt="Aditya Alok - CS Student"
                       className="profile-photo"
                       />
            </div>

        </section>
    );
};

export default Hero;