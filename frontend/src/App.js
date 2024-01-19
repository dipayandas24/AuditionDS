import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './Components/Loader/Loader';
import Landing from './Pages/Landing/Landing';

const App = () => {
  const [loading, setLoading] = useState(true);

  const onFinishLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    const simulateLoading = () => {
      setTimeout(() => {
        onFinishLoading(); 
      }, 5000);
    };

    simulateLoading();
  }, []);

  return (
    <Router>
      <Routes>
        {loading ? (
          <Route path="/" element={<Loader onFinishLoading={onFinishLoading} />} />
        ) : (
          <Route path="/" element={<Landing />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
