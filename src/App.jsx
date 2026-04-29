import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { useIsMounted } from '@/hooks';
import LoadingAnimation from './components/LoadingAnimation';

// Lazy load route components
const Layout = lazy(() => import('./components/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const Beans = lazy(() => import('./pages/Beans'));
const BeanDetail = lazy(() => import('./pages/BeanDetail'));

function App() {
  const [loading, setLoading] = useState(true);
  const isMountedRef = useIsMounted();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isMountedRef]);

  if (loading) {
    return <LoadingAnimation />;
  }

  const basename = import.meta.env.PROD ? '/kekopistreet' : '/';

  return (
    <Router basename={basename}>
      <Suspense fallback={<LoadingAnimation />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/beans" element={<Beans />} />
            <Route path="/bean/:beanId" element={<BeanDetail />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
