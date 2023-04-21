import '../../scss/_NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardWidget from '../CardWidget/CardWidget.jsx';
import pokelogo from './assets/pokestore-logo.png';
import { Link } from 'react-router-dom';
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
                    <Link to={"/"}><li><button className='all'>All</button></li></Link>
                    <Link to={"/category/1"}><li><button className='fire'>Fire</button></li></Link>
                    <Link to={"/category/2"}><li><button className='grass'>Grass</button></li></Link>
                    <Link to={"/category/3"}><li><button className='water'>Water</button></li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;