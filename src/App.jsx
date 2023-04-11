import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Pokemon from './components/Pokemon/Pokemon';

function App() {
  return (
    <div className="App">
      <Pokemon/>
      <NavBar></NavBar>
      <ItemListContainer greeting={"¡Bienvenidos!"}></ItemListContainer>
    </div>
  );
}

export default App;
