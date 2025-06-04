import Link from 'next/link'
import FadeInOnScroll from '@/components/FadeInOnScroll'

export default function FadeInEffectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* En-tête de navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-gray-900">Effets Fade In on Scroll</h1>
            <Link 
              href="/" 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </nav>

      {/* Contenu principal avec espacement pour la nav fixe */}
      <div className="pt-20 space-y-32">
        
        {/* Section Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <FadeInOnScroll direction="bottom" duration={1.2} delay={0.2}>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Fade In
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}On Scroll
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez des animations fluides et élégantes qui s'activent lors du défilement. 
                Chaque élément apparaît avec grâce au moment parfait.
              </p>
            </div>
          </FadeInOnScroll>
        </section>

        {/* Section Directions */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll direction="top" duration={0.8}>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Animations par Direction
            </h2>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeInOnScroll direction="left" distance={100} duration={1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">De la gauche</h3>
                <p className="text-gray-600">
                  Animation élégante qui glisse depuis la gauche avec un effet de fondu.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="right" distance={100} duration={1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-green-500 rounded-lg mb-4"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">De la droite</h3>
                <p className="text-gray-600">
                  L'élément apparaît en glissant gracieusement depuis la droite.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="top" distance={80} duration={1.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Du haut</h3>
                <p className="text-gray-600">
                  Une entrée verticale depuis le haut avec un mouvement fluide.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="bottom" distance={80} duration={1.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-orange-500 rounded-lg mb-4"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Du bas</h3>
                <p className="text-gray-600">
                  L'animation classique qui monte depuis le bas de l'écran.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Section Durées et Délais */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll direction="bottom" duration={0.8}>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Variations de Timing
            </h2>
          </FadeInOnScroll>

          <div className="space-y-8">
            <FadeInOnScroll direction="left" duration={0.5} delay={0}>
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">Animation rapide (0.5s)</h3>
                <p>Apparition instantanée et dynamique</p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="right" duration={1.5} delay={0.3}>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">Animation lente avec délai (1.5s + 0.3s)</h3>
                <p>Mouvement gracieux et contemplatif</p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="bottom" duration={2} delay={0.6}>
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-2">Animation très lente avec long délai (2s + 0.6s)</h3>
                <p>Effet dramatique et mémorable</p>
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Section Stagger */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll direction="bottom" duration={0.8}>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Effet Stagger (Animation en cascade)
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll direction="bottom" stagger={0.2} duration={0.8}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="w-8 h-8 bg-red-400 rounded-full mx-auto mb-3"></div>
                <h4 className="font-semibold">Item 1</h4>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="w-8 h-8 bg-blue-400 rounded-full mx-auto mb-3"></div>
                <h4 className="font-semibold">Item 2</h4>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="w-8 h-8 bg-green-400 rounded-full mx-auto mb-3"></div>
                <h4 className="font-semibold">Item 3</h4>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="w-8 h-8 bg-purple-400 rounded-full mx-auto mb-3"></div>
                <h4 className="font-semibold">Item 4</h4>
              </div>
            </div>
          </FadeInOnScroll>
        </section>

        {/* Section de démonstration complexe */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll direction="bottom" duration={0.8}>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Composition Complexe
            </h2>
          </FadeInOnScroll>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <FadeInOnScroll direction="top" duration={1} delay={0.2}>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Produit Révolutionnaire
                </h3>
                <p className="text-lg text-gray-600">
                  Découvrez l'innovation qui va changer votre quotidien
                </p>
              </div>
            </FadeInOnScroll>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <FadeInOnScroll direction="left" duration={1} delay={0.4}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    ⚡
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Rapide</h4>
                  <p className="text-gray-600">Performance optimisée pour une expérience fluide</p>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll direction="bottom" duration={1} delay={0.6}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    🔒
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Sécurisé</h4>
                  <p className="text-gray-600">Protection avancée de vos données</p>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll direction="right" duration={1} delay={0.8}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                    ✨
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Élégant</h4>
                  <p className="text-gray-600">Design moderne et intuitif</p>
                </div>
              </FadeInOnScroll>
            </div>

            <FadeInOnScroll direction="bottom" duration={1} delay={1}>
              <div className="text-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-shadow">
                  Découvrir maintenant
                </button>
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Section finale */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <FadeInOnScroll direction="bottom" duration={1.2}>
            <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-12">
              <h2 className="text-4xl font-bold mb-6">
                Prêt à créer des animations magnifiques ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Le composant FadeInOnScroll est entièrement configurable et réutilisable
              </p>
              <Link
                href="/"
                className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Retourner à l'accueil
              </Link>
            </div>
          </FadeInOnScroll>
        </section>
      </div>
    </main>
  )
} 