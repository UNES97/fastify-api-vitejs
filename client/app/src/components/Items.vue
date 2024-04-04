<script setup>
import { ref, watchEffect, defineProps } from 'vue'
import axios from 'axios'


/* const API_URL = `http://localhost:3000/api/items` */
const API_URL = `${window.location.origin}/api/items`;
const items = ref(null)

watchEffect(async () => {
  try {
    const response = await axios.get(API_URL)
    items.value = response.data.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})

function capitalizeString(s) {
  const newString = s.toUpperCase()
  return newString;
}
defineProps({
  msg: String,
})
</script>

<template>
  <h1>List {{ msg }}</h1>
  <ul v-if="items">
    <li v-for="item in items" :key="item.id">
      <span>{{ capitalizeString(item.name) }} - {{ item.age }}</span>
    </li>
  </ul>
</template>

<style>
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
</style>
