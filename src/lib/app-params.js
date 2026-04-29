const isNode = typeof window === 'undefined';

// Secure storage implementation with error handling
const createSecureStorage = () => {
  if (!isNode) {
    try {
      const testKey = '__storage_test__';
      window.localStorage.setItem(testKey, 'test');
      window.localStorage.removeItem(testKey);
      return window.localStorage;
    } catch (e) {
      console.warn('localStorage not available, using memory storage');
      return createMemoryStorage();
    }
  }
  console.warn('Running in Node environment, storage will not persist');
  return createMemoryStorage();
};

const createMemoryStorage = () => {
  const store = new Map();
  return {
    getItem: (key) => store.get(key) || null,
    setItem: (key, value) => store.set(key, value),
    removeItem: (key) => store.delete(key),
    clear: () => store.clear(),
  };
};

const storage = createSecureStorage();

const toSnakeCase = (str) => {
	return str.replace(/([A-Z])/g, '_$1').toLowerCase();
};

// URL validation to prevent open redirect
const isValidUrl = (urlString) => {
  try {
    const url = new URL(urlString);
    const allowedProtocols = ['http:', 'https:'];
    if (!allowedProtocols.includes(url.protocol)) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
};

const sanitizeUrl = (url) => {
  if (!url || typeof url !== 'string') {
    return null;
  }
  
  const sanitized = url.trim().replace(/[\x00-\x1F\x7F]/g, '');
  
  if (!isValidUrl(sanitized)) {
    console.warn(`Invalid URL rejected: ${url}`);
    return null;
  }
  
  return sanitized;
};

const getAppParamValue = (paramName, { defaultValue = undefined, removeFromUrl = false } = {}) => {
	if (isNode) {
		return defaultValue;
	}
	
	const storageKey = `base44_${toSnakeCase(paramName)}`;
	
	try {
		const urlParams = new URLSearchParams(window.location.search);
		let searchParam = urlParams.get(paramName);
		
		// Sanitize URL parameters
		if (paramName === 'from_url' || paramName === 'app_base_url') {
			searchParam = sanitizeUrl(searchParam);
			if (!searchParam && urlParams.has(paramName)) {
				console.error(`Rejected invalid URL for parameter: ${paramName}`);
			}
		}
		
		if (removeFromUrl && urlParams.has(paramName)) {
			urlParams.delete(paramName);
			const newUrl = `${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ""}${window.location.hash}`;
			window.history.replaceState({}, document.title, newUrl);
		}
		
		if (searchParam) {
			storage.setItem(storageKey, searchParam);
			return searchParam;
		}
		
		if (defaultValue) {
			const validatedDefault = (paramName === 'from_url' || paramName === 'app_base_url') 
				? sanitizeUrl(defaultValue) || defaultValue 
				: defaultValue;
			storage.setItem(storageKey, validatedDefault);
			return validatedDefault;
		}
		
		const storedValue = storage.getItem(storageKey);
		if (storedValue) {
			return storedValue;
		}
	} catch (error) {
		console.error(`Error accessing storage for ${paramName}:`, error);
		return defaultValue;
	}
	
	return null;
};

const getAppParams = () => {
	try {
		if (getAppParamValue("clear_access_token") === 'true') {
			storage.removeItem('base44_access_token');
			storage.removeItem('token');
		}
	} catch (error) {
		console.error('Error clearing access tokens:', error);
	}
	
	return {
		appId: getAppParamValue("app_id", { defaultValue: import.meta.env.VITE_BASE44_APP_ID }),
		token: getAppParamValue("access_token", { removeFromUrl: true }),
		fromUrl: getAppParamValue("from_url", { defaultValue: isNode ? '' : window.location.href }),
		functionsVersion: getAppParamValue("functions_version", { defaultValue: import.meta.env.VITE_BASE44_FUNCTIONS_VERSION }),
		appBaseUrl: getAppParamValue("app_base_url", { defaultValue: import.meta.env.VITE_BASE44_APP_BASE_URL }),
	};
}

export const appParams = {
	...getAppParams()
}
