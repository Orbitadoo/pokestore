import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
