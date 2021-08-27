import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import React from 'react';

import AlcoveOfTheSaintsABCD from './components/alcove-of-the-saints/abcd';
import AlcoveOfTheSaintsEFG from './components/alcove-of-the-saints/efg';
import AlcoveOfTheSaintsHIJ from './components/alcove-of-the-saints/hij';
import AlcoveOfTheSaintsKLM from './components/alcove-of-the-saints/klm';
import AlcoveOfTheSaintsNOP from './components/alcove-of-the-saints/nop';
import AlcoveOfTheSaintsQRS from './components/alcove-of-the-saints/qrs';
import AlcoveOfTheSaintsTUV from './components/alcove-of-the-saints/tuv';
import AlcoveOfTheSaintsWX from './components/alcove-of-the-saints/wx';
import AlcoveOfTheSaintsYZAA from './components/alcove-of-the-saints/yzaa';

import './App.css';

export default function App() {
  // React.useEffect(() => {
  //   const script = document.createElement('script');

  //   script.src = '/js/script.js';
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => document.body.removeChild(script);
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/alcove-of-the-saints/abcd">
                Alcove of the Saints - ABCD
              </Link>
            </li>
            <li>
              <Link to="/alcove-of-the-saints/efg">
                Alcove of the Saints - EFG
              </Link>
            </li>
            <li>
              <Link to="/alcove-of-the-saints/hij">
                Alcove of the Saints - HIJ
              </Link>
            </li>
            <li>
              <Link to="/alcove-of-the-saints/klm">
                Alcove of the Saints - KLM
              </Link>
            </li>
            <li>
              <Link to="/alcove-of-the-saints/nop">
                Alcove of the Saints - NOP
              </Link>
            </li>
            <li>
              <Link to="/alcove-of-the-saints/qrs">
                Alcove of the Saints - QRS
              </Link>
            </li>
            <li>
              <Link to="/alcove-of-the-saints/tuv">
                Alcove of the Saints - TUV
              </Link>
            </li>
            <li>
              <Link to="/alcove-of-the-saints/wx">
                Alcove of the Saints - WX
              </Link>
            </li>
            <li>
              <Link to="/alcove-of-the-saints/yzaa">
                Alcove of the Saints - YZAA
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/alcove-of-the-saints/abcd">
            <AlcoveOfTheSaintsABCD />
          </Route>
          <Route path="/alcove-of-the-saints/efg">
            <AlcoveOfTheSaintsEFG />
          </Route>
          <Route path="/alcove-of-the-saints/hij">
            <AlcoveOfTheSaintsHIJ />
          </Route>
          <Route path="/alcove-of-the-saints/klm">
            <AlcoveOfTheSaintsKLM />
          </Route>
          <Route path="/alcove-of-the-saints/nop">
            <AlcoveOfTheSaintsNOP />
          </Route>
          <Route path="/alcove-of-the-saints/qrs">
            <AlcoveOfTheSaintsQRS />
          </Route>
          <Route path="/alcove-of-the-saints/tuv">
            <AlcoveOfTheSaintsTUV />
          </Route>
          <Route path="/alcove-of-the-saints/wx">
            <AlcoveOfTheSaintsWX />
          </Route>
          <Route path="/alcove-of-the-saints/yzaa">
            <AlcoveOfTheSaintsYZAA />
          </Route>
          <Route path="/">
            <p>Home</p>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
