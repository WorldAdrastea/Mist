import './NavBar.css'
import logo from '../../imgs/mist-svgrepo-com.svg'
import InstallButton from '../InstallButton/InstallButton'
import { useState } from 'react'

export default function NavBar() {
    const [showDropdown, setShowDropdown] = useState(false);

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
                    <a 
                        className='nav-item' 
                        href='/'
                        onMouseEnter={() => setShowDropdown('games')}
                        onMouseLeave={() => setShowDropdown(null)}
                    >
                        Games
                        {showDropdown === 'games' && (
                            <div className='dropdown-content'>
                                <a href='/'>Home</a>
                                <a href='/'>Discovery Queue</a>
                                <a href='/'>Wishlist</a>
                                <a href='/'>Points shop</a>
                                <a href='/'>News</a>
                                <a href='/'>Stats</a>
                            </div>
                        )}
                    </a>
                    <a 
                        className='nav-item' 
                        href='/'
                        onMouseEnter={() => setShowDropdown('community')}
                        onMouseLeave={() => setShowDropdown(null)}
                    >
                        Community
                        {showDropdown === 'community' && (
                            <div className='dropdown-content'>
                                <a href='/'>Home</a>
                                <a href='/'>Discussion</a>
                                <a href='/'>Workup</a>
                                <a href='/'>Market</a>
                                <a href='/'>Broadcasts</a>
                            </div>
                        )}
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