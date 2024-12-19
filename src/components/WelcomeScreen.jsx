// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-6 text-white">
      <div className="w-max px-4 py-2 flex items-center justify-center gap-4 text-4xl text-linear font-bold text-primary font-displaytwo bg-white rounded-3xl shadow-xl">
        
      <img src="./img/christmas-ball.svg" alt=""/>
  
        <p className="bg-gradient-to-r from-primaryone to-primarytwo inline-block text-transparent bg-clip-text sm:hidden md:block font-display">Secret Santa</p>

      </div>
      <p className="text-lg font-display">
        Bienvenue dans l'application Secret Santa !<br/> 
        Organisez facilement votre échange de cadeaux entre amis ou collègues.
      </p>
      <button onClick={onStart} className="w-max shadow-2xl rounded-3xl button text-lg font-display border-2 border-white bg-white px-8 py-3 hover:border-secondaryone hover:text-secondaryone inline-block text-transparent bg-clip-text transition-all hover:scale-105">
      Commencer !
      </button>
    </div>
  );
}
