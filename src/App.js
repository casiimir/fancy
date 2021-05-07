import styles from "./App.module.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import MainBody from "./components/MainBody";
import Modal from "./components/Modal";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <MainBody />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
