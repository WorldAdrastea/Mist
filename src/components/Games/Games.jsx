import { useEffect, useState } from "react";
import './Games.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

import Slider from "react-slick";

export default function Games() {
    const [games, setGames] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hovered, setHovered] = useState(false);
    const apiKey = process.env.REACT_APP_API_KEY
    const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=20`

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
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
                console.log(data);
                setGames(data.results)
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
            <h2 id='games-content-title'>
                Featured Games
            </h2>
            {games.length > 0 && (
                <Slider className="slideshow" {...settings}>
                    {games.map((game, index) => (
                        <div className="black-container">
                            <div 
                                key={game.id} 
                                className={index === currentSlide ? 'slide active' : 'slide'}
                            >
                                <img 
                                    src={game.background_image} 
                                    alt={game.name} className="game-images"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                />
                                <h3>{game.name}</h3>
                                <p>Genres: {game.genres.map(genre => genre.name).join(', ')}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
            {hovered && (
                <div className="games-popup">
                    {games.map((game, index) => (
                    <div
                        key={game.id}
                        className={index === currentSlide ? 'slide active' : 'slide'}
                    >
                        <h2>
                            {game.name}
                        </h2>
                        <h3>
                            {game.created}
                        </h3>
                        <img 
                            src={game.background_image_additional}
                            alt={game.name}
                            className="games-popup-image"
                        />
                    </div>
                    ))}
                    
                </div>
            )}
        </main>
    )
}