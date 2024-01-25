import "./MainContent.css"
import SideBar from "../SideBar/SideBar";
import placeholder from "../../imgs/placeholder.png"


export default function MainContent() {
    return (
        <div className='main-content'>
            <div className="main-content-image-wrapper"> 
                <img src={placeholder} alt="placeholderimage"/>
            </div>
            
            <div>
                <SideBar/>
            </div>
        </div>
    )
}