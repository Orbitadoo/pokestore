import '../../scss/_NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardWidget from '../CardWidget/CardWidget.jsx';
import pokelogo from './assets/pokestore-logo.png';
const NavBar = () => {
    return (
        <nav className="container">
            {/* LOGO & BRAND */}
            <div>
                {/* IMG */}
                <img className="pokelogo"
                    src={pokelogo} alt="PokeStore Brand Logo">
                </img>

                {/* BRAND */}
                <h3>
                    PokéStore
                </h3>

                {/* CART SHOPPING */}
                <CardWidget></CardWidget>
            </div>

            {/* NAVBAR */}
            <div>
                <ul>
                    <li><button className='all'>All</button></li>
                    <li><button className='fire'>Fire</button></li>
                    <li><button className='water'>Water</button></li>
                    <li><button className='grass'>Grass</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;