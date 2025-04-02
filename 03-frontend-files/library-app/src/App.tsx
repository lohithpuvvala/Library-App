import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/Hompage/ExploreTopBooks';
import { Carousel } from './layouts/Hompage/Carousel';
import { Heros } from './layouts/Hompage/Heros';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
    </div>
  );
}

export default App;
