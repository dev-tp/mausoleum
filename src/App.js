import React from 'react';

import AlcoveOfTheSaintsABCD from './components/alcove-of-the-saints/abcd';

import './App.css';

export default function App() {
  React.useEffect(() => {
    const script = document.createElement('script');

    script.src = 'js/script.js';
    script.async = true;

    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className="App">
      <AlcoveOfTheSaintsABCD />
    </div>
  );
}
