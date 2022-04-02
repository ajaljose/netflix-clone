import Banner from "./components/pages/Banner";
import Header from "./components/pages/Header";
import './App.css'
import RowPost from "./components/pages/RowPost";
import {action,originals,romance,animation} from './components/urls/urls'
import Footer from "./components/pages/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <RowPost url={originals} title='Originals' />
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={romance} title='Romance' />
      <RowPost url={animation} title='Animation' isSmall/>

      <Footer/>
    </div>
  );
}

export default App;
