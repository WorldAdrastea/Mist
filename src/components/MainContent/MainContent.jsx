import "./MainContent.css"
import SideBar from "../SideBar/SideBar";
import placeholder from "../../imgs/placeholder.png"
import FooterBar from "../FooterBar/FooterBar";


export default function MainContent() {
    return (
        <div className='main-content'>
            <div className="main-content-image-wrapper"> 
                <img src={placeholder} alt="placeholderimage"/>
            </div>
            <SideBar/>
            <FooterBar/>
                
        </div>
    )
}