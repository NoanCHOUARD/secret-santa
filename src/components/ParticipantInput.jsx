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
    <div className="space-y-4 bg-linear-45 from-secondaryone to-secondarytwo shadow-2xl p-4 rounded-3xl">
      // Champs de saisie pour ajouter un participant
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
        <button className="bg-tertiaryone ease-in-out text-white hover:bg-white hover:text-primaryone rounded-full p-2" onClick={addParticipant}>
          <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.333 25.1066H12.181C9.56763 25.1066 7.44763 27.224 7.44763 29.84V51.9306C7.44763 54.544 9.56763 56.6666 12.181 56.6666H15.3383C17.9516 56.6666 20.0716 54.5466 20.0716 51.9306V29.84C20.0716 27.2266 17.9516 25.1066 15.3383 25.1066" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M56.4263 32.648L52.6396 51.584C52.3499 53.0365 51.5592 54.3412 50.4055 55.2701C49.2519 56.1991 47.8086 56.6934 46.3276 56.6666H26.381C24.7069 56.6666 23.1014 56.0016 21.9177 54.8179C20.734 53.6342 20.069 52.0287 20.069 50.3546V31.4186C20.1197 30.2032 20.4273 29.0124 20.9715 27.9244C21.5157 26.8365 22.2841 25.8761 23.2263 25.1066L25.845 9.3253C25.9046 8.95756 26.0501 8.60907 26.2697 8.30815C26.4894 8.00724 26.7769 7.76238 27.109 7.59349C27.441 7.42461 27.8082 7.33645 28.1808 7.33618C28.5533 7.33592 28.9207 7.42355 29.253 7.59197L32.1863 9.04264C34.1253 10.0011 35.6777 11.5947 36.585 13.5582C37.4922 15.5218 37.6998 17.7368 37.173 19.8346L35.8503 25.0746H50.2396C51.1757 25.0743 52.1001 25.2822 52.9459 25.6833C53.7917 26.0843 54.5377 26.6685 55.1299 27.3934C55.7221 28.1183 56.1456 28.9659 56.3699 29.8747C56.5941 30.7835 56.6134 31.7308 56.4263 32.648Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <h1 className="text-lg font-display text-white">Ajouter une icône :</h1>
      <div className="w-full flex items-center space-x-2 bg-linear-45 from-primarytwo to-primaryone shadow-xl p-2 rounded-3xl">

        <button className="bg-tertiaryone ease-in-out text-white hover:bg-white hover:text-primaryone rounded-full p-2" onClick={addParticipant}>
        </button>

        <button className="bg-tertiaryone ease-in-out text-white hover:bg-white hover:text-primaryone rounded-full p-2" onClick={addParticipant}>
        </button>

        <button className="bg-tertiaryone ease-in-out text-white hover:bg-white hover:text-primaryone rounded-full p-2" onClick={addParticipant}>
        </button>

        <button className="bg-tertiaryone ease-in-out text-white hover:bg-white hover:text-primaryone rounded-full p-2" onClick={addParticipant}>
        </button>

      </div>

      // Liste des participants ajoutés
      <ul className="space-y-2">
        {participants.map((name, index) => (
          <li key={index} className="list-item">
            {name}
            <div className="space-x-2">
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => onRemoveParticipant(index)}
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
