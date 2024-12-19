import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { ParticipantInput } from "./components/ParticipantInput";
import { AssignmentDisplay } from "./components/AssignmentDisplay";

export default function App() {
  // Tableau des participants
  const [participants, setParticipants] = useState([]);
  // Tableau des assignments
  const [assignments, setAssignments] = useState([]);
  // Etat de l'application welcome | input | assignments
  const [currentScreen, setCurrentScreen] = useState("welcome");

  // Fonction pour ajouter un participant
  const addParticipant = (name) => {
    setParticipants([...participants, name]);
  };

  // Fonction pour supprimer un participant
  const removeParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  // Fonction pour distribuer les cadeaux
  const distributeGifts = () => {
    // S'il n'y a pas assez de participants, on affiche une alerte
    if (participants.length < 2) {
      alert("Il faut au moins 2 participants pour faire un Secret Santa !");
      return;
    }

    // On mélange le tableau des participants
    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    // On crée un nouveau tableau d'assignments
    const newAssignments = shuffled.map((giver, index) => ({
      giver,
      receiver: shuffled[(index + 1) % shuffled.length],
    }));

    // On met à jour le state des assignments
    setAssignments(newAssignments);
    // On affiche l'écran des assignments
    setCurrentScreen("assignments");
  };

  // Fonction pour recommencer l'application
  const resetApp = () => {
    setParticipants([]);
    setAssignments([]);
    setCurrentScreen("welcome");
  };

  return (
    <div className="w-full mx-auto bg-linear-45 from-primaryone to-primarytwo font-displaytwo">
      <div className=" min-h-screen flex flex-col gap-5 justify-center items-center">
        {currentScreen === "welcome" && (
          <WelcomeScreen onStart={() => setCurrentScreen("input")} />
        )}
        {/* // INPUT */}
        {currentScreen === "input" && (
          <>
          <div className="flex items-center justify-center w-max shadow-2xl rounded-2xl text-lg font-display bg-white px-8 py-3">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-primaryone to-primarytwo text-transparent bg-clip-text">
              Ajoutez les participants
            </h2>
          </div>
            <ParticipantInput
              onAddParticipant={addParticipant}
              participants={participants}
              onRemoveParticipant={removeParticipant}
            />
            <div className="mt-6">
              <button className="bg-white p-2 rounded-full shadow-2xl text-primaryone hover:text-secondaryone font-display" onClick={distributeGifts}>
                Distribuer les cadeaux
              </button>
            </div>
          </>
        )}
        {/* // ASSIGNMENTS */}
        {currentScreen === "assignments" && (
          <>
          <div className="flex items-center justify-center p-2 bg-white rounded-xl shadow-2xl">
            <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-primaryone to-primarytwo inline-block text-transparent bg-clip-text sm:hidden md:block font-display">
              Attributions des cadeaux
            </h2>
            </div>
            <AssignmentDisplay assignments={assignments} />
            <div className="mt-6">
              <button className="w-max shadow-2xl rounded-3xl button text-lg font-display bg-white px-8 py-3" onClick={resetApp}>
                <p className="bg-gradient-to-r from-primaryone to-primarytwo inline-block text-transparent bg-clip-text">Recommencer</p>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
