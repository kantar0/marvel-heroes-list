import React, { useEffect, useState } from 'react'
import { GetComics } from '../services/GetComics';
import { Comic } from "../types";

interface Props {
    id: string
    availableComics: number | undefined
}


let offset = 2;
let limit = 2;
const ComicsList = ({id, availableComics} : Props ) => {
    const [Comics, setComics] = useState<Array<Comic>>([])
    const [loading, setLoading] = useState(false)
    const handleComics = () => {
        GetComics(id,offset,limit)
        .then((data: Array<Comic>) => { 
            setLoading(true);
            const newComics = data;
            setComics((prevState: Comic[]) => [...prevState, ...newComics]);
            availableComics !== undefined && offset < availableComics ? offset = offset + 2 : offset = 0;
        })
        .finally(() => {
            setLoading(false);
        });

    }
    const handleLoadMore = () => {
        handleComics();
    }
    
    useEffect(() => {
        handleComics()
    }, [])
    
  return (
    <ul >
        {Comics.map((comic: Comic, index : number) => <li key={index}>
            <span className='mb-3 font-normal text-gray-700 dark:text-gray-400'><span className='font-bold text-white'>{index + 1} - </span>{comic.title}</span>
        </li>)}
        {offset !== 0 ? <li className='m-2'><button className='cursor-pointer inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-blue-800 dark:bg-gray-500 dark:hover:bg-gray-400' onClick={handleLoadMore}>Load More Comics</button></li> : null}
    </ul>
  )
}

export default ComicsList