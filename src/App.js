import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfollio from "./components/portfollio/Portfollio";
import Works from "./components/works/Works";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfollio />
        <Works />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
