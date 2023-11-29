import Header from "./components/Header/Header";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Electricity from "./components/Electricity/Electricity";
import Cases from "./components/Cases/Cases";
import FAQ from "./components/FAQ/FAQ";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BurgerMenu />
      <main>
        <Main />
        <About />
        <Electricity />
        <Cases />
        <FAQ />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
