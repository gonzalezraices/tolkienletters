<template>
  <div class="container">
    <h1 class="text-4xl">{{ letter.title }}</h1>
    <p v-if="letter.context">{{ letter.context }}</p>
    <address class="not-italic">{{ letter.address.data.address }}</address>
    <p>To: {{ letter.recipient.data.name }}</p>
    <iframe
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      :src="`https://maps.google.com/maps?q=${letter.address.data.map.latitude},${letter.address.data.map.longitude}&hl=es&z=14&amp;output=embed`"
    >
    </iframe>
    <pre class="mt-32">{{ letter }}</pre>
    <!-- <div v-if="letter">
      <time :datetime="letter.date" :title="letter.date">
        {{ $prismic.asDate(letter.date) }}
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
        }
      }`;
      const letter = await $prismic.api.getByUID("letter", letterNumber, { graphQuery });

      return { letter: letter.data };
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
