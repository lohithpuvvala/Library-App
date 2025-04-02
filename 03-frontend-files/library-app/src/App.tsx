import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/Hompage/ExploreTopBooks';
import { Carousel } from './layouts/Hompage/Carousel';
import { Heros } from './layouts/Hompage/Heros';
import { LibraryServices } from './layouts/Hompage/LibraryServices';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </div>
  );
}

export default App;
