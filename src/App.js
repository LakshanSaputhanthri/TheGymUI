import "./App.css";
import Hero from "./components/Hero/Hero";
import Join from "./components/join/Join";
import Plans from "./components/plans/Plans";
import Programs from "./components/programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Footer from "./components/footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";


function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
