// Ce composant affiche la liste des participants
// Il prend en props le tableau de participants : participants
// Il prend en props une fonction pour ajouter un participant : onAddParticipant
// Il prend en props une fonction pour supprimer un participant : onRemoveParticipant

import { useState } from "react";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    // On ajoute le participant seulement si le currentName n'est pas vide
    if (currentName !== "") {
      // Appel de la fonction onAddParticipant avec le nom courant
      onAddParticipant(currentName);
      // Reset du currentName
      setCurrentName("");
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-4 bg-linear-45 from-secondaryone to-secondarytwo shadow-2xl p-4 rounded-3xl">
      {/* // Champs de saisie pour ajouter un participant */}
      <h1 className="text-lg font-display text-white">Ajouter un nom :</h1>
      <div className="flex items-center space-x-2 bg-linear-45 from-primarytwo to-primaryone shadow-xl p-2 rounded-3xl">
        <input
          type="text"
          className="input text-white/65 h-7 flex-grow font-displaytwo"
          placeholder="Entrez un nom"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addParticipant()}
        />
        <button className="bg-secondaryone ease-in-out text-white hover:bg-tertiaryone hover:text-primaryone rounded-full p-2" onClick={addParticipant}>
          <img src="./img/thumbs-up.svg" alt="" className="w-7 h-auto"/>
        </button>
      </div>
      <h1 className="text-lg font-display text-white">Ajouter une icône :</h1>
      <div className="w-full flex items-center space-x-2 bg-linear-45 from-primarytwo to-primaryone shadow-xl p-2 rounded-3xl">



      </div>
    </div>

    <div className="flex flex-col space-y-4 bg-white shadow-2xl p-4 rounded-3xl">

      {/* // Liste des participants ajoutés */}

      <h1 className="text-lg font-display bg-gradient-to-r from-primaryone to-primarytwo inline-block text-transparent bg-clip-text">Liste des participants :</h1>

      <ul className="space-y-2">
        {participants.map((name, index) => (
          <li className="space-y-2" key={index}>

          <div className="flex relative justify-between w-full text-white font-displaytwo h-auto bg-linear-45 from-primaryone to-primarytwo shadow-xl p-2 rounded-3xl">

              {name}
            <div className="flex items-center justify-center rounded-full bg-linear-45 from-secondaryone to-secondarytwo w-24 h-auto z-10 p-2">
              <img src="./img/santa.svg" alt=""/>
            </div>

          </div>

          <div className="w-full h-auto flex items-center justify-center space-x-2">
              <button
                className="bg-gradient-to-r from-primaryone to-primarytwo p-2 rounded-full shadow-2xl text-white hover:text-secondaryone"
                onClick={() => onRemoveParticipant(index)}
              >
                <p className="">Supprimer</p>
              </button>
            </div>

          </li>
        ))}
      </ul>

    </div>

  </div>
  );
}
