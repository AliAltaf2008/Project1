import './App.css';
import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { Services } from './components/Services';
import { OnlineLearning } from './components/OnlineLearning';
import { About } from './components/About';
import { ContactFooter } from "./components/ContactFooter"; 
//import logo from './assets/img/logo.png'; // Add your logo file
import { Curriculum } from './components/Curriculum';
import { Testimonials } from "./components/Testimonials";



function App() {
  return (
    <div className="App">
     <NavBar />
<HomePage />
<Services />
<OnlineLearning />
<Curriculum />
<About />
<Testimonials />
<ContactFooter />
    </div>
  );
}

export default App;
