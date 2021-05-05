import styles from "./App.module.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import MainBody from "./components/MainBody";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <MainBody />
    </div>
  );
}

export default App;
