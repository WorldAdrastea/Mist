import './SideBar.css'

const genres = [
    "RPG",
    "Simulation",
    "Sports",
    "Shooters",
    "2D",
    "3D",
    "Strategy",
    "Adventure"
]

const platforms = [
    "PC",
    "iOS",
    "VR",
    "Xbox",
    "PlayStation"
]

const categories = [
    "Top Sellers",
    "New Releases",
    "Upcoming",
    "Special Offers",
    "Controller Compatible"
]

export default function SideBar() {

    return (
        <div className='side-bar'>
            <div className='side-bar-container'>
                <div className='side-bar-browse-wrapper'>
                    <h1>
                        Browse
                    </h1>
                </div>
                <div className='side-bar-genre-wrapper '>
                    <h2>
                        Genres
                    </h2>
                    <ul className='side-bar-genre-list'>
                        {genres.map((genre, index) => (
                            <li key={index}>
                                {genre}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>
                        Platform
                    </h2>
                    <ul className='side-bar-platform-list'>
                        {platforms.map((platform, index) => (
                            <li key={index}>
                                {platform}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>
                        Categories
                    </h2>
                    <ul className='side-bar-categories-list'>
                        {categories.map((category, index) => (
                            <li key={index}>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}