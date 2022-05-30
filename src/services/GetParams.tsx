import md5 from 'md5';

const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

 export const getParams = (offset?: number, limit? : number | undefined) => {
    const ts = Date.now();
    const params = {
      ts,
      apikey: PUBLIC_KEY,
      hash: md5(ts + PRIVATE_KEY + PUBLIC_KEY),
      limit: limit === undefined ? 50 : limit || undefined,
      offset
    };
  
    return (Object.keys(params) as (keyof typeof params)[])
      .filter(key => params[key] !== undefined)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key]!)}`)
      .join('&');
  }