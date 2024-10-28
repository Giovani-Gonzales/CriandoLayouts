import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ul className="nav justify-content-center bg-dark py-2">
        <li className="nav-item">
          <a className="nav-link active text-light" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light disabled" href="#" tabIndex="-1" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>

      <div className="container my-4">
        <div className="row mb-4">
          <div className="col-6 col-md-3 red py-5 text-center"></div>
          <div className="col-6 col-md-3 blue py-5 text-center"></div>
          <div className="col-6 col-md-3 green py-5 text-center"></div>
          <div className="col-6 col-md-3 purple py-5 text-center"></div>
        </div>

        <div className="row mb-4">
          <div className="col-12 col-md-7 red py-5 text-center"></div>
          <div className="col-12 col-md-3 green py-5 text-center"></div>
        </div>

        <div className="row mb-4">
          <div className="col-12 col-md-3 blue py-5 text-center"></div>
          <div className="col-12 col-md-7 purple py-5 text-center"></div>
        </div>
      </div>

      <footer className="bg-dark text-white text-center py-3 mt-4">
        <h1>FOOTER</h1>
      </footer>
    </>
  );
}

export default App;
