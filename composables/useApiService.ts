import qs from 'qs';

export const useApiService = () => {
  const config = useRuntimeConfig(); 
  const strapiDomain = config.public.getStrapiDomain; 
  const apiToken = config.public.getAPIToken; 

  const buildUrl = (path: string, params: object = {}) => {
    const queryString =
      Object.keys(params).length > 0
        ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
        : '';
    return `${strapiDomain}/api${path}${queryString}`;
  };

  const getAuthHeaders = () => {
    return {
      Authorization: `Bearer ${apiToken}`,
      'Content-Type': 'application/json',
    };
  };
  const apiFetch = (path: string, options: object = {}) => {
    const url = path.startsWith('/api') ? `${strapiDomain}${path}` : buildUrl(path);
    return fetch(url, {
      ...options,
      headers: getAuthHeaders(),
    });
  };

  return {
    buildUrl,
    apiFetch,
    getAuthHeaders
  };
};