// App.js
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
    // Simulating an asynchronous task, e.g., API call or data loading
    const simulateLoading = () => {
      setTimeout(() => {
        onFinishLoading(); // Call the onFinishLoading function when loading is complete
      }, 5000); // Adjust the time as needed
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
