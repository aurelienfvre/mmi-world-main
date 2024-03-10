<template>
  <div class="card" @click="navigateToFichePays">
    <input type="checkbox" @change="toggleSelection" @click.stop class="select-country-checkbox" />
    <img v-if="showFlag" :src="flag" alt="Drapeau" class="flag" />
    <h3>{{ name }}</h3>
    <p>Capitale: {{ capital }}</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['selectCountry'])

const router = useRouter()

// Définition et validation des props avec des valeurs par défaut si nécessaire.
const props = defineProps({
  name: { type: String, required: true },
  capital: { type: String, required: true },
  flag: { type: String, required: false },
  showFlag: { type: Boolean, default: true }
})

const toggleSelection = (event) => {
  emit('selectCountry', { name: props.name, isSelected: event.target.checked })
}

const navigateToFichePays = () => {
  router.push({ name: 'FichePays', params: { id: props.name } })
}
</script>

<style scoped>
/* Votre CSS existant ici, considérez les améliorations d'accessibilité */
.card {
  cursor: pointer;
}
</style>


<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: auto;
}

.select-country-checkbox {
  position: absolute;
  margin: 10px;
}

/* Ajoutez ceci dans le style de Pays.vue pour une portée globale ou dans CardPays.vue pour une portée locale */
.card-link,
.card-link:visited {
  color: #333; /* Couleur du texte */
  text-decoration: none; /* Pas de soulignement */
  text-align: center;
}

.card-link:hover {
  color: #007bff; /* Couleur au survol */
}
</style>
