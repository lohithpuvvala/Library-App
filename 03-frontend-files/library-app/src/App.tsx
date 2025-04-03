import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/Hompage/Components/ExploreTopBooks';
import { Carousel } from './layouts/Hompage/Components/Carousel';
import { Heros } from './layouts/Hompage/Components/Heros';
import { LibraryServices } from './layouts/Hompage/Components/LibraryServices';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Homepage } from './layouts/Hompage/Homepage';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}