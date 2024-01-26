import './NavBar.css'
import logo from '../../imgs/mist-svgrepo-com.svg'
import InstallButton from '../InstallButton/InstallButton'

export default function NavBar() {
    return (
        <div className='nav-bar'>
            <div className='nav-container'>
                <a className='nav-bar-logo' href='/'>
                    <img 
                        src={logo}
                        alt='mist logo'
                        className='mist-logo'
                    />
                    <h1 id='nav-mist'>
                        Mist
                    </h1>
                </a>
                <div className='navigation'>
                    <a className='nav-item' href='/'>
                        Games
                    </a>
                    <a className='nav-item' href='/'>
                        Community
                    </a>
                    <a className='nav-item' href='/'>
                        About
                    </a>
                    <a className='nav-item' href='/'>
                        Support
                    </a>
                </div>
                <div className='nav-download'>
                    <InstallButton/>
                </div>
            </div>
        </div>
    )
}