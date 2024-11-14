import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const Welcome: React.FC = () => {
  const { state } = useGlobalContext();

  useEffect(() => {
    console.log('mf welcome')
    if (state.initialized && state.providerFromCore) {
      // 使用 providerFromCore
      console.log('Provider is ready:', state.providerFromCore);
    }
  }, [state.initialized, state.providerFromCore]);

  return (
    <div>
      <h1>Welcome to Module Federation Demo</h1>
      <p>Initialized: {state.initialized ? 'Yes' : 'No'}</p>
      <p>Provider: {state.providerFromCore ? 'Available' : 'Not Available'}</p>
    </div>
  );
};

export default Welcome;