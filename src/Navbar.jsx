const Navbar = () => {
    return (  
        <nav className='navbar'>
            <div>
                <a id="logo" href="#home"><img src="public/favicon.ico"></img></a>
            </div>
            <div>
                <div>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#connect">Connect</a>
            </div>

            <div>
                <a className="social" href="https://github.com/Shiela-P"><img src="src/assets/github.png"/></a>

                <a href="https://www.linkedin.com/in/shielafpeters" className="social"><img src="src/assets/linkedin.png"/></a>
            </div>
            </div>
            
            
        </nav>
    );
}
 
export default Navbar;