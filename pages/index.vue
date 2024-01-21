<!-- pages/index.vue -->

<template>
  <div>
    <h1>Data from API:</h1>
    <ul>
      <li v-for="item in apiData" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useFetch } from '@nuxt/http';

const apiData = ref([]);

onMounted(async () => {
  const { data } = await useFetch('/api/disney');
  apiData.value = data;
});
</script>
