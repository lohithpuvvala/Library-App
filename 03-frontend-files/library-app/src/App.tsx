import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/Hompage/ExploreTopBooks';
import { Carousel } from './layouts/Hompage/Carousel';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
    </div>
  );
}

export default App;
