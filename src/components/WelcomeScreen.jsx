// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-6">
      <div className="w-max px-4 py-2 flex items-center justify-center gap-4 text-4xl text-linear font-bold text-primary font-display bg-white rounded-3xl">
        
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6667 34.6667C10.6667 40.3246 12.9144 45.7508 16.9151 49.7516C20.9159 53.7524 26.3421 56 32.0001 56C37.658 56 43.0843 53.7524 47.085 49.7516C51.0858 45.7508 53.3334 40.3246 53.3334 34.6667C53.3334 29.0087 51.0858 23.5825 47.085 19.5817C43.0843 15.581 37.658 13.3333 32.0001 13.3333C26.3421 13.3333 20.9159 15.581 16.9151 19.5817C12.9144 23.5825 10.6667 29.0087 10.6667 34.6667Z" stroke="url(#paint0_linear_11_1532)" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M29.3333 13.3333L31.9999 8L34.6666 13.3333M12.0319 27.096C18.6879 24.1502 25.3439 24.896 31.9999 29.3333C39.0061 34.0053 46.0124 34.5858 53.0186 31.0747M11.5066 40.672C18.3368 37.4471 25.1679 38.112 31.9999 42.6667C38.1137 46.7413 44.2275 47.7022 50.3413 45.5493" stroke="url(#paint1_linear_11_1532)" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
      <linearGradient id="paint0_linear_11_1532" x1="53.3334" y1="13.3333" x2="2.38427" y2="40.4222" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF4646"/>
      <stop offset="1" stop-color="#FF6B6B"/>
      </linearGradient>
      <linearGradient id="paint1_linear_11_1532" x1="53.0186" y1="8" x2="5.06157" y2="35.375" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF4646"/>
      <stop offset="1" stop-color="#FF6B6B"/>
      </linearGradient>
      </defs>
      </svg>
  
        <p className="bg-gradient-to-r from-primaryone to-primarytwo inline-block text-transparent bg-clip-text sm:hidden md:block">Secret Santa</p>

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
