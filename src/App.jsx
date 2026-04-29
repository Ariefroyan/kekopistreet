import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Beans from './pages/Beans';
import BeanDetail from './pages/BeanDetail';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const [loading, setLoading] = useState(true);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    
    const timer = setTimeout(() => {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }, 2000);

    return () => {
      isMountedRef.current = false;
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  const basename = import.meta.env.PROD ? '/kekopistreet' : '/';

  return (
    <Router basename={basename}>
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
