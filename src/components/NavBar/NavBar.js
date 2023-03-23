import '../../scss/_NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardWidget from '../CardWidget/CardWidget.js';
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
                    PokeStore
                </h3>

                {/* CART SHOPPING */}
                <CardWidget></CardWidget>
            </div>

            {/* NAVBAR */}
            <div>
                <ul>
                    <li><button className='all'>All</button></li>
                    <li><button className='normal'>Normal</button></li>
                    <li><button className='fire'>Fire</button></li>
                    <li><button className='water'>Water</button></li>
                    <li><button className='grass'>Grass</button></li>
                    <li><button className='electric'>Electric</button></li>
                    <li><button className='ice'>Ice</button></li>
                    <li><button className='fighting'>Fighting</button></li>
                    <li><button className='poison'>Poison</button></li>
                    <li><button className='ground'>Ground</button></li>
                    <li><button className='flying'>Flying</button></li>
                    <li><button className='psychic'>Psychic</button></li>
                    <li><button className='bug'>Bug</button></li>
                    <li><button className='rock'>Rock</button></li>
                    <li><button className='ghost'>Ghost</button></li>
                    <li><button className='dark'>Dark</button></li>
                    <li><button className='dragon'>Dragon</button></li>
                    <li><button className='steel'>Steel</button></li>
                    <li><button className='fairy'>Fairy</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;