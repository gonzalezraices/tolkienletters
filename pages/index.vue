<template>
  <div class="container">
    <h1 class="text-5xl">Tolkien Letters</h1>
    <pre>{{ letters }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic }) {
    const letters = await $prismic.api.query($prismic.predicates.at("document.type", "letter"));

    return { letters };
  },
};
</script>
