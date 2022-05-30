import { Character } from '../types';
import { getParams } from './GetParams';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const GetCharacter = async (id : string | undefined) =>{
    const response = await fetch(`${BASE_URL}/v1/public/characters/${id}?${getParams()}`);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data.data.results[0] as Character;
  }
