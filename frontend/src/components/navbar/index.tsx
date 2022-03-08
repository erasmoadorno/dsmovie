import {ReactComponent as GithubIcon} from 'assets/imgs/Vector.svg';

function Navbar() {
    return(
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DSMovie</h1>
                    <a href="https://github.com/erasmoadorno">
                    <div className='dsmovie-contact-container'>
                        <GithubIcon /> 
                        <p className='dsmovie-contact-link'>/erasmoadorno</p>
                    </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;