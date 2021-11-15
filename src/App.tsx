import { useEffect, useState, Suspense, lazy } from "react";
import logo from "./logo.svg";
import "./App.css";

import X from "./foo.graphql";
import func from "topFile2";
import func2 from "app/util1";

import "./fontawesome/css/font-awesome-booklist-build.css";

//import AsyncModule from "./AsyncModule";
const AsyncModule = lazy(() => import("./AsyncModule"));

console.log(X);

function App() {
  const [count, setCount] = useState(0);

  let x: any = "12 string";

  const [Mod, setMod] = useState<any>(null);

  useEffect(() => {
    if (count === 2) {
      import("./AsyncModule").then(({ default: Comp }) => {
        setMod(() => Comp);
      });
    }
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <span>
          <i className="far fa-cloud-upload-alt" />
        </span>
        <img src="src/static/book1.jpeg" />
        <img src="src/static/book2.jpeg" />
        {func()}
        {func2()}
        <Suspense fallback={null}>
          <AsyncModule />
        </Suspense>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        {Mod ? <Mod /> : null}
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {" | "}
          <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
