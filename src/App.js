import styles from "./App.module.scss";
import { useState } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";
import Modal from "./components/Modal";
import ExtGallery from "./components/ExtGallery";

function App() {
  const [isModalVisible, setModalVisibile] = useState(false);
  const [isGalleryVisibile, setGalleryVisible] = useState(false);

  return (
    <div className={styles.App}>
      <Navbar onHandle={setModalVisibile} />
      <Hero />
      <MainBody onGalleryHandle={setGalleryVisible} />
      {isModalVisible && (
        <Modal onHandle={setModalVisibile}>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
          </ul>
        </Modal>
      )}
      {isGalleryVisibile && (
        <Modal>
          <ExtGallery onGalleryHandle={setGalleryVisible} />
        </Modal>
      )}
    </div>
  );
}

export default App;
