<template>
  <div class="container">
    <h1 class="text-4xl">{{ letter.uid }} - {{ letter.data.title }}</h1>
    <p v-if="letter.data.context">{{ letter.data.context }}</p>
    <address class="not-italic">
      <a
        :href="`https://www.google.com/maps/search/?api=1&query=${letter.data.address.data.map.latitude},${letter.data.address.data.map.longitude}`"
        target="_blank"
        class="underline text-blue-500"
        >{{ letter.data.address.data.address }}</a
      >
    </address>
    <p>To: {{ letter.data.recipient.data.name }}</p>
    <iframe
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      :src="`https://maps.google.com/maps?q=${letter.data.address.data.map.latitude},${letter.data.address.data.map.longitude}&hl=es&z=14&amp;output=embed`"
    >
    </iframe>
    <prismic-rich-text :field="letter.data.body" />

    <pre class="mt-32">{{ letter }}</pre>
    <!-- <div v-if="letter">
      <time :datetime="letter.data.date" :title="letter.data.date">
        {{ $prismic.asDate(letter.data.date) }}
      </time>
      <pre>{{ letter }}</pre>
    </div>
    <div v-else>No letter was found.</div> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params, redirect, error }) {
    const letterNumber = params.number;

    if (isNaN(letterNumber)) {
      return redirect("/");
    }

    try {
      const graphQuery = `{
        letter {
          title
          uid
          address {
            ...on address {
              address
              map
            }
          }
          recipient {
            ...on recipient {
              name
            }
          }
          context
          body
        }
      }`;
      const letter = await $prismic.api.getByUID("letter", letterNumber, { graphQuery });

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

<style></style>
