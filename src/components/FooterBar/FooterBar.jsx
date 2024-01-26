import InstallButton from '../InstallButton/InstallButton'
import './FooterBar.css'

//Logos
import FacebookLogo from '../../imgs/facebook-svgrepo-com.svg'
import InstagramLogo from '../../imgs/instagram-svgrepo-com.svg'
import TwitterLogo from '../../imgs/twitter-svgrepo-com.svg'


export default function FooterBar() {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-intro'>
                    Looking to be a gamer? Then download Mist right now:
                </div>
                <div>
                    <InstallButton/>
                </div>
                <div className='smallprint'>
                    Mist 2024. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante quam, commodo sit amet enim ac, viverra bibendum dui.
                </div>
            </div>
            <div className='footer-content'>
                <a href='/' className='content-item'>About</a>
                <a href='/' className='content-item'>Jobs</a>
                <a href='/' className='content-item'>Community</a>
                <a href='/' className='content-item'>Support</a>
                <img src={FacebookLogo} alt='Facebook Logo' className='social-media content-item'></img>
                <img src={InstagramLogo} alt='Instagram Logo' className='social-media content-item'></img>
                <img src={TwitterLogo} alt='Twitter Logo' className='social-media content-item'></img>
            </div>
        </footer>
    )
}