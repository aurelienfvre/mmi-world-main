<template>
  <div>
    <input
      v-model="recherche"
      @input="fetchPays"
      placeholder="Rechercher un pays"
      class="search-input"
    />
    <ul>
      <li v-for="pays in paysList" :key="pays.cca3">
        {{ pays.name.common }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

let recherche = ref('')
let paysList = ref([])

const fetchPays = async () => {
  if (recherche.value) {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${recherche.value}`)
      paysList.value = response.data
    } catch (error) {
      console.error('Erreur lors de la récupération des informations des pays:', error)
      paysList.value = []
    }
  } else {
    paysList.value = []
  }
}
</script>

<style scoped>
/* Ajoutez ici le CSS nécessaire */
</style>
