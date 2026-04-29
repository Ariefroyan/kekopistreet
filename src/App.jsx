import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Beans from './pages/Beans';
import BeanDetail from './pages/BeanDetail';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/beans" element={<Beans />} />
          <Route path="/bean/:beanId" element={<BeanDetail />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
