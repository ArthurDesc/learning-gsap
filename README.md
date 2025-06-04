# 🚀 Next.js + GSAP + Tailwind CSS 4.0

Un projet moderne configuré avec les meilleures technologies pour 2025 : **Next.js 15**, **GSAP**, et **Tailwind CSS 4.0**.

## ✨ Fonctionnalités

- 🏗️ **Next.js 15** avec App Router et Turbopack
- 🎨 **Tailwind CSS 4.0** avec configuration @theme inline
- ✨ **GSAP** pour des animations fluides et performantes
- 📝 **TypeScript** pour une meilleure expérience développeur
- 🎯 **ESLint** pour un code de qualité
- 🔧 **PostCSS** intégré pour Tailwind CSS 4.0

## 🎯 Démos Incluses

### 1. AnimatedHero
- Animation d'entrée en séquence
- Animation de pulsation continue
- Scroll smooth avec GSAP

### 2. GSAPDemo
- Animations Timeline
- Transformations (scale, rotation, translation)
- Stagger animations
- ScrollTrigger intégré
- Animations interactives

### 3. ScrollAnimation
- Animations déclenchées par le scroll
- Effet parallax
- Animations de hover
- ScrollTrigger avancé

## 🚀 Installation et Configuration

### Prérequis
- Node.js 18+ 
- npm, yarn ou pnpm

### Installation

```bash
# Cloner le projet
git clone <votre-repo>
cd learning-gsap

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le projet sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📦 Dépendances Principales

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "15.3.3",
    "gsap": "^3.12.5"
  },
  "devDependencies": {
    "typescript": "^5",
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "15.3.3"
  }
}
```

## ⚙️ Configuration Tailwind CSS 4.0

Le projet utilise la nouvelle syntaxe Tailwind CSS 4.0 avec `@theme inline` :

```css
@import "tailwindcss";

@theme inline {
  --color-primary-500: #3b82f6;
  --color-secondary-500: #a855f7;
  --spacing-18: 4.5rem;
  --radius-4xl: 2rem;
  /* ... autres variables personnalisées */
}
```

### Nouvelles Fonctionnalités Tailwind 4.0
- ✅ Configuration CSS-first avec `@theme`
- ✅ Import simplifié avec `@import "tailwindcss"`
- ✅ Variables CSS natives
- ✅ PostCSS intégré
- ✅ Performance améliorée

## 🎮 GSAP Configuration

### Plugins Utilisés
- **gsap** (core)
- **ScrollTrigger** pour les animations scroll
- **Timeline** pour les séquences d'animations

### Exemple d'Usage

```typescript
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Enregistrer les plugins
gsap.registerPlugin(ScrollTrigger)

// Animation de base
gsap.to(".element", {
  x: 100,
  duration: 1,
  ease: "power3.out"
})

// Animation avec ScrollTrigger
gsap.to(".scroll-element", {
  y: -100,
  scrollTrigger: {
    trigger: ".scroll-element",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true
  }
})
```

## 📁 Structure du Projet

```
learning-gsap/
├── src/
│   ├── app/
│   │   ├── globals.css      # Styles globaux et configuration Tailwind
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Page d'accueil
│   └── components/
│       ├── AnimatedHero.tsx     # Composant hero avec animations
│       ├── GSAPDemo.tsx         # Démos d'animations interactives
│       └── ScrollAnimation.tsx  # Animations scroll
├── public/
├── package.json
├── postcss.config.mjs       # Configuration PostCSS pour Tailwind 4.0
├── tsconfig.json
└── README.md
```

## 🎨 Thèmes et Couleurs

Le projet inclut un thème personnalisé avec :

- **Couleurs primaires** : Bleu (#3b82f6)
- **Couleurs secondaires** : Violet (#a855f7)
- **Mode sombre** : Support automatique
- **Gradients** : Intégrés dans les composants
- **Animations** : Classes personnalisées

## 🔧 Scripts Disponibles

```bash
# Développement avec Turbopack
npm run dev

# Build de production
npm run build

# Démarrer en mode production
npm run start

# Linter
npm run lint
```

## 📱 Responsive Design

Tous les composants sont entièrement responsives avec :
- **Mobile First** : Design optimisé mobile
- **Breakpoints** : sm, md, lg, xl
- **Grid System** : CSS Grid et Flexbox
- **Animations adaptatives** : Performance mobile optimisée

## 🚀 Performance

### Optimisations incluses :
- ⚡ **Turbopack** pour des builds ultra-rapides
- 🎯 **GSAP Context** pour la gestion mémoire
- 📦 **Tree Shaking** automatique
- 🔄 **Code Splitting** avec Next.js
- 💨 **Tailwind JIT** pour CSS minimal

## 🔥 Nouveautés 2025

Ce projet utilise les dernières technologies :

### Next.js 15
- App Router stable
- Turbopack (Rust)
- React 19 support
- Amélioration des performances

### Tailwind CSS 4.0
- Configuration CSS-first
- Engine Rust (Oxide)
- Variables CSS natives
- Performance 10x plus rapide

### GSAP 3.12+
- Nouvelles fonctionnalités
- Performance améliorée
- ScrollTrigger v3
- Support React 19

## 📖 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS 4.0](https://tailwindcss.com/docs)
- [Documentation GSAP](https://greensock.com/docs/)
- [Guide de Migration Tailwind 4.0](https://tailwindcss.com/docs/upgrade-guide)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche feature
3. Commiter vos changements
4. Pusher vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

**Créé avec ❤️ en 2025 avec les meilleures technologies web modernes**
