<template>
  <div class="container max-w-2xl">
    <h1 class="text-4xl">{{ letter.number }} - {{ letter.title }}</h1>
    <p v-if="letter.context">{{ letter.context }}</p>
    <address class="not-italic">
      <a
        :href="`https://www.google.com/maps/search/?api=1&query=LAT,LONG`"
        target="_blank"
        class="underline text-blue-500"
        >{{ letter.address }}</a
      >
    </address>

    <time :datetime="letter.date_fields.date" :title="letter.date_fields.date">
      {{ letter.date_fields.date }}
    </time>

    <p>To: {{ letter.recipient }}</p>
    <!-- <iframe
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      :src="`https://maps.google.com/maps?q=${letter.data.address.data.map.latitude},${letter.data.address.data.map.longitude}&hl=es&z=14&amp;output=embed`"
    >
    </iframe> -->

    <nuxt-content :document="letter" class="text-xl" />
    <pre class="mt-32">{{ letter }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, redirect, error }) {
    try {
      const letter = await $content("letters", params.slug).fetch();
      return { letter };
    } catch (err) {
      return error({
        statusCode: 404,
        message: "Letter not found.",
      });
    }
  },
};
</script>

<style scoped>
.nuxt-content p {
  text-indent: 1.5rem;
  /* @apply my-4; */
}
.footnotes ol {
  @apply pl-4 list-decimal;
}
.footnotes hr {
  @apply mt-24 mb-8;
}
</style>
