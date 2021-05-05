import styles from "./App.module.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import PostContainer from "./components/PostContainer";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <main>
        <PostContainer />
      </main>
    </div>
  );
}

export default App;
