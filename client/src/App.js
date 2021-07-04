import { BrowserRouter as Router, Route} from 'react-router-dom'
import RutaPrincipal from './components/RutaPrincipal/RutaPrincipal';
import { Link } from 'react-router-dom'
import GameDetails from './components/GameDetails/GameDetails.jsx';
import Home from './components/Home/Home';
import BusquedaJuego from './components/BusquedaJuego/BusquedaJuego';
import CreateGame from './components/CreateGame/CreateGame';
import JuegosCreados from './components/JuegosCreados/JuegosCreados.jsx';

function App() {
  return (
    <Router>
    <Route exact path='/' component={Home}/>
    <Route exact path='/home' component={RutaPrincipal} />
    <Route exact path='/createGame' component={BusquedaJuego} />
    <Route exact path='/createGame' component={CreateGame} />
    <Route exact path='/gameCreated' component={BusquedaJuego} />
    <Route exact path='/gameCreated' component={JuegosCreados} />
    <Route exact path='/videogame/:gameId' component={GameDetails} />
    </Router>
  );
}

export default App;
