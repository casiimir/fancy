import styles from "./App.module.scss";
import { useState, useEffect } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";
import Modal from "./components/Modal";
import ExtGallery from "./components/ExtGallery";

function App() {
  // Modal and Gallery logics
  const [isModalVisible, setModalVisibile] = useState(false);
  const [isGalleryVisibile, setGalleryVisible] = useState(false);

  // Scrolling logic
  const [offsetY, setOffsetY] = useState(0);
  const [fullWidthMain, setFullWidthMan] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setOffsetY(window.scrollY));

    if (offsetY >= 526) setFullWidthMan(true);
    else setFullWidthMan(false);
  });

  return (
    <div className={styles.App}>
      <Navbar onHandle={setModalVisibile} />
      <Hero />
      <MainBody
        onGalleryHandle={setGalleryVisible}
        fullWidthMain={fullWidthMain}
      />
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
