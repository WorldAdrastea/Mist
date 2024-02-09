import { useEffect, useState } from "react";
import './Games.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";

import specialOffer from '../../imgs/specialoffer.jpg'

export default function Games() {
    const [games, setGames] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const apiKey = process.env.REACT_APP_API_KEY
    const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=862179`;

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log("Games section data: ", data);

                const shuffledGames = data.results.sort(() => Math.random() - 0.5);

                const randomGames = shuffledGames.slice(0, 20);
                setGames(randomGames)
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, [apiUrl]);

    useEffect(() => {

        const timer = setInterval(() => {
            setCurrentSlide(current => (current + 1) % games.length);
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, [games])
    

    return (
        <main>
            <div>
                <h2 id='games-content-title'>
                    Featured Games
                </h2>
                <div className="slide-container">
                {games.length > 0 && (
                    <Slider className="slideshow" {...settings}>
                        {games.map((game, index) => (
                            <div className="black-container">
                                <div 
                                    key={game.id} 
                                    className={index === currentSlide ? "slide active" : "slide"}
                                >
                                    <img 
                                        src={game.background_image} 
                                        alt={game.name} 
                                        className="game-images"
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                    <h3>{game.name}</h3>
                                    <p>Genres: {game.genres.map(genre => genre.name).join(', ')}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
                </div>
            </div>
            {hoveredIndex !== null && (
                <div className="games-popup">
                    <div className="slide active">
                        <h2>{games[hoveredIndex].name}</h2>
                        <h3>Released: {games[hoveredIndex].released}</h3>
                        <img 
                            src={games[hoveredIndex].background_image}
                            alt={games[hoveredIndex].name}
                            className="games-popup-image"
                        />
                        <p className="game-platforms">Platforms: {games[hoveredIndex].platforms.map(platform => platform.platform.name).join(', ')}</p>
                        <p>Genres: {games[hoveredIndex].genres.map(genre => genre.name).join(', ')}</p>
                    </div>
                </div>
            )}
            <a href="/">
                <div className="special-banner">
                    <img src={specialOffer} alt="special-offer" id="special-offer-banner"/>
                </div>
            </a>
        </main>
    )
}