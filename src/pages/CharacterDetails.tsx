import React, { useEffect, useState } from "react";
import { GetCharacter } from "../services/GetCharacter";
import { Character as ICharacter } from "../types";
import Breadcrumb from "../components/Breadcrumb";
import { useParams } from "react-router";
import ComicsList from "../components/ComicsList";
import { useNavigate } from "react-router-dom";

type characterDetailsPageRouteParams = {
  id: string
};
const CharacterDetails = () => {
  const navigate = useNavigate();
  const Token = localStorage.getItem('token');

  const [Character, setCharacter] = useState<ICharacter>();
  const { id } = useParams<characterDetailsPageRouteParams>() as { id: string };

  const loadCharacter = () => {
    GetCharacter(id)
      .then((data: ICharacter) => {
        setCharacter(data);
      })
      .finally(() => {});
  };

  useEffect(() => {
    loadCharacter();
    if (!Token) {
      navigate('/login', { replace: true });
    }
  }, []);

  return (
    <div className="APP_CharactersDetails pt-5 fm:pt-0 flex flex-col">
      <div className="flex justify-center">
        <Breadcrumb characterName={Character?.name} />
      </div>
      <div className="flex justify-center">
        <div className=" flex flex-col items-center border shadow-md md:w-1/2 dark:border-gray-700 dark:bg-gray-600 ">
          <img
            src={`${Character?.thumbnail.path}.${Character?.thumbnail.extension}`}
            alt="character"
            className="object-cover h-96 w-full"
          />

          <div className="flex flex-col justify-between p-4 leading-normal">
            <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {Character?.name}
            </h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {Character?.description === ""
                ? "No description"
                : Character?.description}
            </p>
            {Character?.comics?.available ? <><span className="font-bold dark:text-white"> Comics list</span>
            <ComicsList id={id} availableComics={Character?.comics.available}/></> : <span className="font-bold dark:text-white"> No comics</span>}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
