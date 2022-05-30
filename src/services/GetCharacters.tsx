import { Characters } from '../types';
import { getParams } from './GetParams';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const GetCharacters = async (offset: number, limit: number | undefined) =>{
    const response = await fetch(`${BASE_URL}/v1/public/characters?${getParams(offset, limit)}`);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data.data.results as Characters;
  }
