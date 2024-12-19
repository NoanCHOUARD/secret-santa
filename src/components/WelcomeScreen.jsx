// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-6 text-white">
      <div className="w-max px-4 py-2 flex items-center justify-center gap-4 text-4xl text-linear font-bold text-primary font-display bg-white rounded-3xl shadow-xl">
        
      <img src="./img/christmas-ball.svg" alt=""/>
  
        <p className="bg-gradient-to-r from-primaryone to-primarytwo inline-block text-transparent bg-clip-text sm:hidden md:block font-display">Secret Santa</p>

      </div>
      <p className="text-lg font-displaytwo">
        Bienvenue dans l'application Secret Santa !<br/> 
        Organisez facilement votre échange de cadeaux entre amis ou collègues.
      </p>
      <button onClick={onStart} className="w-max shadow-2xl rounded-3xl button text-lg font-display bg-white px-8 py-3">
      <p className="bg-gradient-to-r from-primaryone to-primarytwo inline-block text-transparent bg-clip-text">Commencer !</p>
      </button>
    </div>
  );
}
