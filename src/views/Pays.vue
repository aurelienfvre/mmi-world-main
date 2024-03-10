<template>
  <div class="country-list-container">
    <input type="checkbox" v-model="showFlags" id="showFlags" class="show-flags-checkbox">
    <label for="showFlags" class="show-flags-label">Afficher les drapeaux</label>
    <input type="text" v-model="recherche" placeholder="Rechercher un pays" class="search-input" />
    <div class="countries-grid">
      <div v-for="pays in filteredPays" :key="pays.cca3">
        <router-link :to="{ name: 'FichePays', params: { id: pays.cca3 } }" class="card-link">
          <CardPays
            :name="pays.name.common"
            :capital="pays.capital && pays.capital.length > 0 ? pays.capital[0] : 'N/A'"
            :flag="pays.flags.svg"
            :showFlag="showFlags"
            @selectCountry="handleCountrySelect"
          />
        </router-link>
      </div>
    </div>
  </div>
  <div class="selected-info">
    Nombre de pays sélectionnés: {{ selectedCountriesCount }}
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import CardPays from '@/components/CardPays.vue'

let recherche = ref('')
let showFlags = ref(true)
let listeComplete = ref([])
let selectedCountries = ref([])


onMounted(async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all')
    listeComplete.value = response.data
  } catch (error) {
    console.error('Il y a eu un problème avec la requête API', error)
  }
})

const filteredPays = computed(() => {
  return listeComplete.value.filter(pays =>
    pays.name.common.toLowerCase().includes(recherche.value.toLowerCase())
  )
})

const handleCountrySelect = ({ name, isSelected }) => {
  if (isSelected) {
    selectedCountries.value.push(name)
    alert(`${name} est sélectionné`)
  } else {
    selectedCountries.value = selectedCountries.value.filter(countryName => countryName !== name)
  }
}
const selectedCountriesCount = computed(() => selectedCountries.value.length)
</script>

<style scoped>
/* Ajoutez ici vos styles existants */
.country-list-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.countries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(300px, auto); /* Assure que toutes les lignes ont au moins 300px de haut */
  gap: 20px;
  margin-top: 20px;
}

.search-input {
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Ajoutez ceci dans le style de Pays.vue pour une portée globale ou dans CardPays.vue pour une portée locale */
.card-link,
.card-link:visited {
  color: #333; /* Couleur du texte */
  text-decoration: none; /* Pas de soulignement */
  text-align: center;
}

.card-link:hover {
  color: #007bff; /* Couleur au survol */ /* Indique clairement qu'il s'agit d'un lien */
}

.show-flags-checkbox {
  margin-right: 10px;
}

.show-flags-label {
  margin-bottom: 20px;
  display: inline-block;
}
</style>
