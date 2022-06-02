import React from "react";
import { Character } from "../types";
import { Link } from 'react-router-dom';
interface Props {
    character: Character
    index : React.Key | null | undefined
}

const Card = ({character, index} : Props) => {
  return (
    <div className="w-80 h-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ml-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103 hover:bg-red-900 duration-300">
        <img
          className="rounded-t-lg object-cover h-48 w-full"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt=""
        />
      <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {index}. {character.name}
          </h5>
        <p className="mb-3 font-normal text-base text-white">
          <span className="font-bold">Nº comics:</span> {character.comics?.available}
        </p>
        <Link className="cursor-pointer inline-flex items-center  py-2 px-8 text-sm font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-blue-800 dark:bg-gray-600 dark:hover:bg-gray-400" to={`/character/${character.id}`}>
          Details
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
