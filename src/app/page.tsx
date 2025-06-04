'use client'

import MagneticButton from '@/components/MagneticButton'
import MagneticButtonWithCircle from '@/components/MagneticButtonWithCircle'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-hidden">
      {/* Particules d'arrière-plan */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-300/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-purple-300/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-indigo-300/25 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* En-tête */}
        <div className="text-center mb-16 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-6 leading-tight">
            Magnetic Buttons
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Effets magnétiques premium avec GSAP
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Découvrez deux types d&apos;effets magnétiques : bouton mobile et cercle suiveur
          </p>
        </div>

        {/* Section Bouton avec Cercle Magnétique */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            🎯 Bouton Fixe avec Cercle Magnétique
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <MagneticButtonWithCircle 
              onClick={() => console.log('Découvrir avec cercle cliqué')}
              circleSize={60}
              magneticStrength={0.6}
            >
              Découvrir
            </MagneticButtonWithCircle>

            <MagneticButtonWithCircle 
              onClick={() => console.log('Portfolio avec cercle cliqué')}
              circleSize={80}
              magneticStrength={0.8}
              className="bg-indigo-900"
            >
              Portfolio
            </MagneticButtonWithCircle>

            <MagneticButtonWithCircle 
              onClick={() => console.log('Contact avec cercle cliqué')}
              circleSize={70}
              magneticStrength={0.4}
              className="bg-purple-900"
            >
              Contact
            </MagneticButtonWithCircle>
          </div>
        </div>

        {/* Section Boutons Magnétiques Classiques */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            🧲 Boutons Magnétiques Classiques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MagneticButton 
              onClick={() => console.log('Bouton Principal cliqué')}
              magneticStrength={0.4}
            >
              ✨ Principal
            </MagneticButton>

            <MagneticButton 
              onClick={() => console.log('Services cliqué')}
              magneticStrength={0.7}
              className="bg-gradient-to-r from-teal-600 via-green-600 to-emerald-700"
            >
              ⚡ Services
            </MagneticButton>

            <MagneticButton 
              onClick={() => console.log('À propos cliqué')}
              magneticStrength={0.35}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-700"
            >
              🌟 À propos
            </MagneticButton>
          </div>
        </div>

        {/* Section informative */}
        <div className="text-center max-w-4xl">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Comment ça fonctionne ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-300">
              <div className="space-y-4">
                <div className="text-lg">🎯</div>
                <div className="font-medium text-white">Cercle Magnétique</div>
                <div>Le bouton reste fixe, mais un cercle à l&apos;intérieur suit votre curseur de manière fluide et contrainte dans les limites du bouton</div>
              </div>
              <div className="space-y-4">
                <div className="text-lg">🧲</div>
                <div className="font-medium text-white">Bouton Magnétique</div>
                <div>Le bouton entier est attiré par le curseur avec un retour élastique élégant</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <p className="text-blue-200 text-sm">
                💡 <strong>Prochaine étape :</strong> Implémentation du changement dynamique de couleur du texte selon la position du cercle
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
