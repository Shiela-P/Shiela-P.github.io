const Navbar = () => {
    return (  
        <nav className='navbar'>
           <img src="public/favicon.ico"></img>
            <a>About</a>
            <a>Projects</a>
            <a>Connect</a>
            <a>Resume</a>
            <a className="social" href="https://github.com/Shiela-P"><img src="src/assets/github.png"/></a>
            <a href="https://www.linkedin.com/in/shielafpeters" className="social"><img src="src/assets/linkedin.png"/></a>
        </nav>
    );
}
 
export default Navbar;