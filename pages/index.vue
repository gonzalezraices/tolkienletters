<template>
  <div class="container">
    <h1 class="text-5xl">Tolkien Letters</h1>
    <div class="hidden flex flex-col">
      <NuxtLink
        v-for="letter in letters"
        :key="letter.slug"
        :to="{ name: 'slug', params: { slug: letter.slug } }"
        >Letter {{ letter.slug }}</NuxtLink
      >
    </div>
    <!-- <pre>{{ letters }}</pre> -->
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }],
    };
  },
  async asyncData({ $content, error, $prismic }) {
    // const letters = await $prismic.api.query($prismic.predicates.at("document.type", "letter"));
    const letters = await $content("letters").fetch();

    return { letters };
  },
};
</script>
