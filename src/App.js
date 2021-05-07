import styles from "./App.module.scss";
import { useState } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";
import Modal from "./components/Modal";

function App() {
  const [isModalVisible, setModalVisibile] = useState(false);

  return (
    <div className={styles.App}>
      <Navbar onHandle={setModalVisibile} />
      <Hero />
      <MainBody />
      {isModalVisible && <Modal onHandle={setModalVisibile} />}
    </div>
  );
}

export default App;
