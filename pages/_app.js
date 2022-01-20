import React from 'react';

import '../styles/global.css';

function TransitionLayout({ children }) {
  const [currentChildren, setCurrentChildren] = React.useState(children);
  const [transitionStage, setTransitionStage] = React.useState('fade-out');

  React.useEffect(() => setTransitionStage('fade-in'), []);

  React.useEffect(() => {
    if (children !== currentChildren) {
      setTransitionStage('fade-out');
    }
  }, [children, currentChildren, setCurrentChildren]);

  return (
    <div
      className={`content ${transitionStage}`}
      onTransitionEnd={() => {
        if (transitionStage === 'fade-out') {
          setCurrentChildren(children);
          setTransitionStage('fade-in');
        }
      }}
    >
      {currentChildren}
    </div>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <TransitionLayout>
      <Component {...pageProps} />
    </TransitionLayout>
  );
}
