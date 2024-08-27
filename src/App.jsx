import { Route, Routes } from 'react-router-dom';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Chatbotss from "./components/Chatbotss"; // Import the new Chatbot component
import { Leva } from 'leva'
const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      
      <Routes>
        <Route path="/" element={<><Hero /><Collaboration /><Services /><Roadmap /><Footer /></>} />
        <Route path="/chatbotss" element={<Chatbotss />} /> {/* Define the route for the Chatbot page */}
        {/* Add other routes here as needed */}
      </Routes>
      <ButtonGradient />
    </div>
  );
};

export default App;
