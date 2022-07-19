import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DownloadExtensions from "./components/DownloadExtensions";
import FAQs from "./components/FAQs";
import Email from "./components/Email";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <DownloadExtensions />
      <FAQs />
      <Email />
    </div>
  );
};

export default App;
