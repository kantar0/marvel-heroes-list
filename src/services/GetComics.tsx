import { Comic } from '../types';
import { getParams } from './GetParams';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const GetComics = async (id : string | undefined, offset : number, limit: number) =>{
    const response = await fetch(`${BASE_URL}/v1/public/characters/${id}/comics?${getParams(offset, limit)}`);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data.data.results as Array<Comic>;
  }
