## Pour copier le projet le plus idéal pour le tpnoter je pense ou prendre le projet en zip (prendre en zip sera mieux)

#### Pour prendre le projet en zip cliquer sur le bouton vert "Code" et cliquer sur "Download ZIP" une fois le zip téléchargé le dézipper (ouvir le téléchargement normalement il y a un dossier dedans prendre le dossier qui est à l'interieur et le glisser sur le bureau par exemple) et ouvrir le dossier dans votre éditeur de code (ouvrir vscode et cliquer sur file puis new window et glisser le dossier qui est sur le bureau dans la fenêtre de vscode)

### Ne pas faire si vous avez téléchargé en zip

```bash
git clone https://github.com/aurelienfvre/mmi-world-main.git tp_noter
```

## Faire dans les deux cas

### Pour installer les dépendances

```bash
cd tp_noter
ou
cd mmi-world-main
```

```bash
npm install
```

## Pour lancer le projet

```bash
npm run dev
```

## Pour faire un projet vue de zéro voir séance 1

```bash
npm init vue@latest
```

## Répondez aux différentes questions. Par défaut mettez toutes les questions sur NON, sauf "Add Vue Router for single Page Application development" que vous pouvez mettre sur yes.

## Faire ces commandes pour installer les dépendances et lancer le projet

```bash
cd nom_du_projet
```

#### Installer vue router Voir séance 3

```bash
npm install vue-router@4
```

```bash
npm install
```

```bash
npm install axios
```

```bash
npm run dev
```

### Les fichiers importants sont :

- src/App.vue
- src/components/les fichiers dedans
- src/router/index.js
- src/views/les fichiers dedans

Dans les fichiers dans views on fait appel aux components en faisant :
dans la section script

```bash
import NomDuComponent from '../components/NomDuComponent.vue'
```

dans la section template:

```bash
<template>
code ...
<NomDuComponent />
</template>
```

dans le dossier router/index.js on fait appel aux views en faisant :

```bash
  ,
    {
      path: '/fournisseurs',
      name: 'Fournisseurs',
      component: () => import('../views/Fournisseurs.vue')
    },
    {
      path: '/nom_de_la_page',
      name: 'NomDeLaPage',
      component: () => import('../views/nomdufichier.vue')
    }
```

### Pour avoir de l'aide avec chatgpt pour le code voici ce qu'il faut dire

```bash
Je travail sur un projet en vue.js 3 donc j'aimerais que tu m'aides en respectant les conventions et bonnes pratiques de vue.js 3

Voici mon code :
(mettre le code ici)
```

#### Autre exemple

```bash
Je dois utiliser cette api (mettre le lien donner dans le tp ) et voici mon code actuel car j'ai une autre api à la place pour l'instant :
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const data = ref()
const page = ref(1)
const limit = ref(10)

async function getPokemonData() {
  try {
    if (page.value < 1) {
      page.value = 1
    }
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit.value}&offset=${(page.value - 1) * limit.value}`)
    data.value = response.data.results
    for (let pokemon of data.value) {
      const details = await axios.get(pokemon.url)
      pokemon.details = details.data
    }
  } catch (err) {
    console.error('Une erreur est survenue lors de la récupération des données de l\'API PokeAPI.', err)
  }
}
```

## Pour publier son projet sur github avec ligne de commande

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "first commit"
```

```bash
git branch -M main
```

```bash
git remote add origin
```

```bash
git push -u origin main
```

## Pour publier son projet sur github avec interface graphique

### Cliquer sur le troisième bouton en haut à gauche appeler "source control" et cliquer sur "publish to github" et choisir public ou privé et cliquer sur "publish repository" et voilà votre projet est sur github.

## Une fois le tp terminé supprimer le contenu du readme (ce fichier) en faisant ctrl + a et supprimer
