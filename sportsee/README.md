# SportSee - Coaching Sportif

## Description

SportSee est une application de coaching sportif qui permet aux utilisateurs de suivre leurs activités physiques, leurs sessions moyennes, leurs performances et leur score. Cette application est construite en utilisant React et diverses bibliothèques de visualisation pour afficher les données sous forme de graphiques interactifs.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure) ou yarn (version 1.22 ou supérieure)

## Installation

1. Clonez le repository :

   ```bash
   git clone https://github.com/ElMoucheh/Projet-12.git
   cd sportsee
   ```

2. Installez les dépendances du projet :

    ```bash
    npm install
    # ou si vous utilisez yarn
    yarn install
    ```

## Configuration
### Variables d'environnement


> [!IMPORTANT]
> Créez un fichier .env à la racine du projet et ajoutez les variables suivantes :

    ```bash
    REACT_API_URL=http://localhost:3000
    ```

## Exécution

Pour démarrer l'application en mode développement :

    ```bash
    npm start
    # ou si vous utilisez yarn
    yarn start
    ```

L'application sera accessible à l'adresse http://localhost:3001.

## Structure du Projet

sportsee/
│
├── public/
├── src/
│   ├── assets/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── icons/
│   │   └── logos/
│   ├── components/
│   │   ├── activityChart.js
│   │   ├── cardInfo.js
│   │   ├── horizontalNavbar.js
│   │   ├── performanceRadarChart.js
│   │   ├── profile.js
│   │   ├── scoreChart.js
│   │   ├── sessionDurationChart.js
│   │   └── verticalNavbar.js
│   ├── hooks/
│   │   └── useUserData.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── styles/
│       ├── global.scss
│       ├── profile.scss
│       └── ... autres fichiers de style
└── package.json