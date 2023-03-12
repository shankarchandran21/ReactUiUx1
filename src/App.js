import "./App.css";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers"; //it will automatically see index.js. its option to give index.js like this ./containers/index
import { Brand, CTA, Navbar } from "./components"; //it will automatically see index.js its option to give index.js like this ./components/index
function App() {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
