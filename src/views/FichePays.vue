<template>
  <div v-if="pays" class="country-detail">
    <button @click="retour" class="btn">Retour</button>
    <h1>{{ pays.name.common }}</h1>
    <img :src="pays.flags.svg" alt="Drapeau de {{ pays.name.common }}" class="flag" />
    <p><strong>Capitale:</strong> {{ pays.capital[0] }}</p>
    <p><strong>Langues:</strong> {{ languagesList }}</p>
    <p><strong>Monnaie:</strong> {{ currenciesList }}</p>
    <p><strong>Superficie:</strong> {{ pays.area }} km²</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const retour = () => {
  router.go(-1)
}
const route = useRoute()
const pays = ref(null)

onMounted(async () => {
  const { id } = route.params
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`)
    pays.value = response.data[0]
    // Console log pour déboguer
    console.log(pays.value)
  } catch (error) {
    console.error('Erreur lors de la récupération des informations du pays:', error)
  }
})

const languagesList = computed(() => Object.values(pays.value.languages || {}).join(', '))
const currenciesList = computed(() => Object.keys(pays.value.currencies || {}).join(', '))
</script>

<style scoped>
.country-detail {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.flag {
  display: block;
  max-width: 80%;
  height: auto;
  margin: 0 auto;
}

.btn {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
