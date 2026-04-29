import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Custom hook for managing mounted state
 * Prevents state updates on unmounted components
 */
export const useIsMounted = () => {
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMountedRef;
};

/**
 * Custom hook for scroll detection
 * @param {number} threshold - Scroll threshold in pixels
 */
export const useScrollDetection = (threshold = 40) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return scrolled;
};

/**
 * Custom hook for keyboard events
 * @param {string} key - Key to listen for
 * @param {Function} callback - Callback function
 */
export const useKeyPress = (key, callback) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === key) {
        callback(e);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [key, callback]);
};

/**
 * Custom hook for managing body scroll lock
 * @param {boolean} locked - Whether to lock scroll
 */
export const useBodyScrollLock = (locked) => {
  useEffect(() => {
    if (locked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [locked]);
};

/**
 * Custom hook for async data loading
 * @param {Function} asyncFunction - Async function to execute
 * @param {Array} dependencies - Dependencies array
 */
export const useAsync = (asyncFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMountedRef = useIsMounted();

  useEffect(() => {
    let cancelled = false;

    const execute = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await asyncFunction();
        
        if (!cancelled && isMountedRef.current) {
          setData(result);
        }
      } catch (err) {
        if (!cancelled && isMountedRef.current) {
          setError(err);
        }
      } finally {
        if (!cancelled && isMountedRef.current) {
          setLoading(false);
        }
      }
    };

    execute();

    return () => {
      cancelled = true;
    };
  }, dependencies);

  return { data, loading, error };
};
