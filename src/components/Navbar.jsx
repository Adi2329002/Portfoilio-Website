const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="navbar-logo">
              <h1>Aditya Alok</h1>
            </div>

            <div className="navbar-links">
              <ul className="nav-links-lists"> 
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contacts">Contacts</a></li>
              </ul>
            </div>
        </nav>

    );
}

export default Navbar;