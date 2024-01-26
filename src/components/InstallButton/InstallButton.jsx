import downloadicon from '../../imgs/download-package-svgrepo-com.svg'
import './InstallButton.css'

export default function InstallButton() {
    return (
        <button id='mist-download'>
            <img src={downloadicon} alt='download icon' id='mist-download-icon'/>
            Install Mist
        </button>
    )
}