import { useState, useEffect } from "react";
import "./MainContent.css"
import SideBar from "../SideBar/SideBar";
import FooterBar from "../FooterBar/FooterBar";
import Games from "../Games/Games";

export default function MainContent() {
    const [featured, setFeatured] = useState();
    const [loading, setLoading] = useState(true)

    const apiKey = process.env.REACT_APP_API_KEY
    const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=862179`

    //Running twice in dev because of StrictMode from index.js
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                console.log(data);

                const randomIndex = Math.floor(Math.random() * data.results.length);
                console.log("Random Index: ", randomIndex)
                    
                setFeatured(data.results[randomIndex])
            } catch (error) {
                console.error('Error fetching data: ', error);
            } finally {
                setLoading(false);
            }
        };

        console.log("useEffect is running");
        fetchData();

    }, [apiUrl]);


    return (
        <div className="main-content">
            <div className="main-content-image-wrapper"> 
            {featured && !loading && (
                <img
                    src={featured.background_image}
                    alt={featured.name}
                    style={{display: loading ? "none" : "block"}}
                />
            )}
            </div>
            <div className="game-content">
                <SideBar/>
                <Games />
            </div>
            <FooterBar/>
        </div>
    )
}