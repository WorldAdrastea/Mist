import './NavBar.css'
import logo from '../../imgs/mist-svgrepo-com.svg'

export default function NavBar() {
    return (
        <div className='nav-bar'>
            <div className='nav-container'>
                <div className='nav-bar-logo'>
                    <img 
                        src={logo}
                        alt='mist logo'
                        className='mist-logo'
                    />
                </div>
                <div className='nav-item'>
                    Games
                </div>
                <div className='nav-item'>
                    Community
                </div>
                <div className='nav-item'>
                    About
                </div>
                <div className='nav-item'>
                    Support
                </div>
            </div>
        </div>
    )
}