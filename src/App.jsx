import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting={"¡Bienvenidos!"}></ItemListContainer>
    </div>
  );
}

export default App;
