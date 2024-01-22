<script setup>
const { data } = await useFetch("/api/disney");
const characters = data;
</script>
<template>
  <main>
    <header>
      <h1>Disney Character Gallery</h1>
    </header>
    <section>
        <ul>
        <li v-for="character in characters.data" :key="character.id">
          <h3>{{ character.name }}</h3>
          <img :src="character.imageUrl" />
          <h4>{{"Films:" + character.films }}</h4>
        </li>
      </ul>
    </section>
  </main>
</template>
