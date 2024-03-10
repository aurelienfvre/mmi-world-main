<template>
  <div>
    <h1>Liste des Fournisseurs</h1>
    <div>
      <form @submit.prevent="ajouterOuModifierFournisseur">
        <input v-model="nouveauLibelle" placeholder="Libellé du fournisseur" />
        <input v-model="nouvelleAdresse.rue" placeholder="Rue" />
        <input v-model="nouvelleAdresse.codepostal" placeholder="Code Postal" />
        <input v-model="nouvelleAdresse.ville" placeholder="Ville" />
        <button type="submit">Ajouter/Modifier Fournisseur</button>
      </form>
    </div>
    <div v-for="fournisseur in fournisseurs" :key="fournisseur.id">
      <p>
        {{ fournisseur.libelle }} - Adresse: {{ fournisseur.adresse ? fournisseur.adresse.rue + ', ' + fournisseur.adresse.ville : 'Pas d\'adresse' }}
        <button @click="supprimer(fournisseur.id)">Supprimer</button>
        <button @click="chargerFournisseurPourModification(fournisseur)">Modifier</button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

let fournisseurs = ref([]);
let idFournisseurActuel = ref('');
let nouveauLibelle = ref('');
let nouvelleAdresse = ref({ rue: '', codepostal: '', ville: '' });

const getFournisseurs = async () => {
  try {
    const response = await axios.get('http://symfony.mmi-troyes.fr:8313/api/fournisseurs');
    fournisseurs.value = response.data['hydra:member'];
  } catch (error) {
    console.error('Erreur lors de la récupération des fournisseurs:', error);
  }
};

const ajouterOuModifierFournisseur = async () => {
  const fournisseurData = {
    libelle: nouveauLibelle.value,
    adresse: nouvelleAdresse.value
  };

  try {
    if (idFournisseurActuel.value) {
      await axios.put(`http://symfony.mmi-troyes.fr:8313/api/fournisseurs/${idFournisseurActuel.value}`, fournisseurData);
    } else {
      await axios.post('http://symfony.mmi-troyes.fr:8313/api/fournisseurs', fournisseurData);
    }
    resetForm();
    getFournisseurs();
  } catch (error) {
    console.error('Erreur lors de l\'ajout/modification du fournisseur:', error);
  }
};

const supprimer = async (id) => {
  try {
    await axios.delete(`http://symfony.mmi-troyes.fr:8313/api/fournisseurs/${id}`);
    getFournisseurs();
  } catch (error) {
    console.error('Erreur lors de la suppression du fournisseur:', error);
  }
};

const chargerFournisseurPourModification = (fournisseur) => {
  idFournisseurActuel.value = fournisseur.id;
  nouveauLibelle.value = fournisseur.libelle;
  nouvelleAdresse.value = fournisseur.adresse || { rue: '', codepostal: '', ville: '' };
};

const resetForm = () => {
  idFournisseurActuel.value = '';
  nouveauLibelle.value = '';
  nouvelleAdresse.value = { rue: '', codepostal: '', ville: '' };
};

onMounted(getFournisseurs);
</script>
