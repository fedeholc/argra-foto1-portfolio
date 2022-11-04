import "./App.css";
import Footer from "./footer.js";
import NavBar from "./navbar";


const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  );
};

 

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

 
export default App;
