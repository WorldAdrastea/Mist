import { useState, useEffect } from "react";
import "./MainContent.css"
import SideBar from "../SideBar/SideBar";
import FooterBar from "../FooterBar/FooterBar";
import Games from "../Games/Games";

export default function MainContent() {
    const [featured, setFeatured] = useState();
    const [loading, setLoading] = useState(true)

    const apiKey = process.env.REACT_APP_API_KEY 
    console.log(apiKey)
    console.log(process.env)
    const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=862179`

    const handleImageLoad = () => {
        setLoading(false);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                console.log(data);

                const randomIndex = Math.floor(Math.random() * data.results.length);
                console.log("Random Index: ", randomIndex)
                    
                setFeatured(data.results[randomIndex])
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data: ', error);
                setLoading(false);
            }
        };
        fetchData();
    }, [apiUrl]);


    return (
        <div className="main-content">
            <div className="main-content-image-wrapper"> 
            {featured && (
                <img
                    src={featured.background_image}
                    alt={featured.name}
                    style={{display: loading ? "none" : "block"}}
                    onLoad={handleImageLoad}
                />
            )}
            </div>
            <div className="game-content">
                <SideBar/>
                <Games featuredGame={featured}/>
            </div>
            <FooterBar/>
        </div>
    )
}