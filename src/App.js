import styles from "./App.module.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
