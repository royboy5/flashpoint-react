import styles from "./App.css";

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={`${styles['App-heading']} ${styles['App-flex']}`}>
          <h2>
            Welcome to <span className={styles["App-react"]}>React</span>
          </h2>
        </div>
        <div className={`${styles["App-instructions"]} ${styles["App-flex"]}`}>
          <img className={styles["App-logo"]} src={require("./react.svg")} />
          <p>
            Edit <code>src/App.js</code> and save to hot reload your changes.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
