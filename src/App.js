import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Row from "./components/Row";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Banner2 />
      <Row
        query="dress"
        h1Content="Up to 50% off | Women's clothing for all occasions"
      />
      <Row
        query="boots"
        h1Content="Up to 40% off | The finest designs and fits for you"
      />
      <Banner2 />
      <Row
        query="airpods"
        h1Content="Up to 45% off | Wireless electronics make life easy"
      />
      <Row
        query="rolex"
        h1Content="Explore more watches - Royal Premium, increasing your royalty"n
      />
      <Footer />
    </div>
  );
}

export default App;
