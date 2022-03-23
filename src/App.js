import Banner from "./components/pages/Banner";
import Header from "./components/pages/Header";
import './App.css'
import RowPost from "./components/pages/RowPost";
import {action,originals} from './components/urls/urls'
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <RowPost url={originals} title='Originals' />
      <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
