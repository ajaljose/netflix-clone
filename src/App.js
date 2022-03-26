import Banner from "./components/pages/Banner";
import Header from "./components/pages/Header";
import './App.css'
import RowPost from "./components/pages/RowPost";
import {action,originals} from './components/urls/urls'
import Footer from "./components/pages/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <RowPost url={originals} title='Originals' />
      <RowPost url={action} title='Action' isSmall/>
      <Footer/>
    </div>
  );
}

export default App;
